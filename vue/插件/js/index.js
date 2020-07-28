Vue.components('Index', {
    el: '#app',
    components: {

    },
    data: function () {
        return {
            prov: '',
            provdata: [],
            date: '',
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() > Date.now() - 8.64e6;//如果没有后面的-8.64e6就是不可以选择今天的
                }
            },
            activeName: 'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            },],
            currentPage: 4
        }
    },
    methods: {
        //省份
        showporv() {
            this.prov = $vm.$refs.areanode.value
            if (this.prov === '全国') {
                let data = [
                    { id: '安徽', name: '安徽' },
                    { id: '北京', name: '北京' },
                    { id: '重庆', name: '重庆' },
                    { id: '福建', name: '福建' },
                    { id: '甘肃', name: '甘肃' },
                    { id: '广东', name: '广东' },
                    { id: '广西', name: '广西' },
                    { id: '贵州', name: '贵州' },
                    { id: '海南', name: '海南' },
                    { id: '河北', name: '河北' },
                    { id: '黑龙江', name: '黑龙江' },
                    { id: '河南', name: '河南' },
                    { id: '江苏', name: '江苏' },
                    { id: '江西', name: '江西' },
                    { id: '吉林', name: '吉林' },
                    { id: '辽宁', name: '辽宁' },
                    { id: '内蒙古', name: '内蒙古' },
                    { id: '宁夏', name: '宁夏' },
                    { id: '青海', name: '青海' },
                    { id: '山东', name: '山东' },
                    { id: '上海', name: '上海' },
                    { id: '山西', name: '山西' },
                    { id: '陕西', name: '陕西' },
                    { id: '四川', name: '四川' },
                    { id: '天津', name: '天津' },
                    { id: '新疆', name: '新疆' },
                    { id: '西藏', name: '西藏' },
                    { id: '云南', name: '云南' },
                    { id: '浙江', name: '浙江' },
                    { id: '湖北', name: '湖北' },
                    { id: '湖南', name: '湖南' },
                ]
                this.provdata.splice(data.length)
                for (let i = 0; i < data.length; i++) {
                    let json = data[i]
                    this.$set(this.provdata, i, json)
                }

            } else {
                this.provdata.splice(1)
                this.$set(this.provdata, 1, { id: this.prov, name: this.prov })
            }

        },
        //点击查询
        clickSearch() {
            let paras = '{"Starttime":"2020-03-11 00:19:20","Endtime":""}'
            let url = '/tmp/actionPython.jsp?module=python&action=catchmassage&gateway=17690&paras=' + paras;//&paras=+pars,
            axios.get(url)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    mounted() {
        this.showporv()
    }
})