addEventListener("load", function () { setTimeout(hideURLbar, 0); }, false);
function hideURLbar() {
    window.scrollTo(0, 1);
}
window.onload = function () {
    scroll();
}

function scroll() {
    if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
        bodyTag = document.getElementsByTagName('body')[0];
        bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
    }
}
const KEY = "7326c9c6-0891-11ec-b5bd-9cda3efd56be";
const loadWithDefault = (key, defaultVal) => {
    const vkey = `${KEY}-${key}`;
    if (window.localStorage.getItem(vkey) === null) return defaultVal;
    else return window.localStorage.getItem(vkey);
};
const save = (key, val) => {
    const vkey = `${KEY}-${key}`;
    window.localStorage.setItem(vkey, String(val));
};
const loadRecords = () => {
    const vkey = `records-${KEY}`;
    const resp = window.localStorage.getItem(vkey);
    if (resp === null) return [];
    else return JSON.parse(resp);
};
const saveRecords = data => {
    const vkey = `records-${KEY}`;
    window.localStorage.setItem(vkey, JSON.stringify(data));
}
Vue.use(MINT);
document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#main",
        data: {
            name: "",
            id: "",
            school: "",
            classname: "",
            returntime: 0,
            editing: true,
            qrdata: "",
            currentTime: 0,
            activeTab: "tab1",
            waiting: false,
            records: [],
            currRecord: {
                index: -1,
                type: "start"
            }
        },
        computed: {
            recordvalue: {
                get() {
                    if (this.currRecord.index === -1) return new Date();
                    return luxon.DateTime.fromSeconds(this.records[this.currRecord.index][this.currRecord.type]).toJSDate();
                },
                set(v) {
                    if (this.currRecord.index === -1) return;
                    this.records[this.currRecord.index][this.currRecord.type] = luxon.DateTime.fromJSDate(v).toSeconds();
                }
            },
            pickerValue: {
                get() {
                    return luxon.DateTime.fromSeconds(this.returntime).toJSDate();
                },
                set(v) {
                    this.returntime = Math.floor(luxon.DateTime.fromJSDate(v).toSeconds());
                }
            },
            timeString() {
                const current = luxon.DateTime.fromSeconds(this.currentTime);
                const end = luxon.DateTime.fromSeconds(this.returntime);
                const diff = end.diff(current, "seconds");
                const seconds = Math.floor(diff.seconds);
                const days = Math.floor(seconds / (24 * 60 * 60));
                const rem = seconds % (24 * 60 * 60);
                const hours = Math.floor(rem / 3600);
                const minutes = Math.floor((rem - 3600 * hours) / 60);
                const seconds1 = rem - 3600 * hours - 60 * minutes;
                return sprintf("%d天 %02d:%02d:%02d", days, hours, minutes, seconds1);
            },

        },
        watch: {
            name(newval) {
                save("name", newval)
            },
            id(newval) {
                save("id", newval);
                QRCode.toDataURL(newval,
                    {
                        width: 150,
                        color: { dark: "#F97AFB" },
                        errorCorrectLevel: "H",
                        version: 2,
                        margin: 0
                    }).then(r => this.qrdata = r);
            },
            school(newval) {
                save("school", newval)
            },
            classname(newval) {
                save("classname", newval)
            },
            returntime(newval) {
                save("returntime", newval)
            },
            editing(newval) {
                if (newval == false) {
                    saveRecords(this.records);
                } else {
                    this.records = loadRecords();
                }
            }
        },
        methods: {
            openRecordTimeEdit(index, type) {
                console.log("?");
                if (!this.editing) return;
                this.currRecord.index = index;
                this.currRecord.type = type;
                this.$refs.recordpicker.open();
            },
            openRecordDest(rawval, callback) {
                if (!this.editing) return;
                MINT.MessageBox.prompt(`请输入新的目的地 (原始值 ${rawval})`).then(({ value, action }) => {
                    if (action === "confirm") {
                        callback(value);
                    }
                });
            },
            addRecord() {
                const now = luxon.DateTime.now()
                this.records = [{ start: now.toSeconds(), end: now.plus({ hours: 5 }).toSeconds(), dest: "光谷步行街" }, ...this.records];
            },
            makeTimeString(second) {
                return luxon.DateTime.fromSeconds(second).toFormat("yyyy-MM-dd HH:mm");
            },
            makeDateString(second) {
                return luxon.DateTime.fromSeconds(second).toFormat("yyyy-MM-dd");
            },
            click1() {
                if (!this.waiting) {
                    this.waiting = true;
                    setTimeout(() => this.waiting = false, 3000);
                }
            },
            click2() {
                this.editing = true;
            },
            openEdit(key, prompt) {
                if (!this.editing) return;
                const rval = this[key];
                MINT.MessageBox.prompt(`请输入新的 ${prompt} 值 (原始值 ${rval})`).then(({ value, action }) => {
                    if (action === "confirm") {
                        this[key] = value;
                    }
                });
            },
            openTimeEdit() {
                if (!this.editing) return;
                this.$refs.picker.open();
            }
        },
        mounted() {
            window.vueobj = this;
            this.name = loadWithDefault("name", "姓名");
            this.id = loadWithDefault("id", "学号");
            this.school = loadWithDefault("school", "学院");
            this.classname = loadWithDefault("classname", "班级");
            this.returntime = parseInt(loadWithDefault("returntime", 0));
            this.records = loadRecords();
            setInterval(() => {
                this.currentTime = Math.floor(luxon.DateTime.now().toSeconds());
            }, 500);
        }
    })
});