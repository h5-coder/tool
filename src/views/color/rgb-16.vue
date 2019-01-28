<template>
    <div class="com-container">
        <div class="form-box">
            <el-form
                class="form"
                @submit.native.prevent
                ref="form"
                :model="form"
                label-width="90px"
            >
                <el-form-item label="红R(0~255)">
                    <el-input
                        type="number"
                        v-model="form.r"
                        maxlength="3"
                        @input="change($event,'r')"
                    ></el-input>
                </el-form-item>
                <el-form-item label="绿G(0~255)">
                    <el-input
                        type="number"
                        v-model="form.g"
                        maxlength="3"
                        @input="change($event,'g')"
                    ></el-input>
                </el-form-item>
                <el-form-item label="蓝B(0~255)">
                    <el-input
                        type="number"
                        v-model="form.b"
                        maxlength="3"
                        @input="change($event,'b')"
                    ></el-input>
                </el-form-item>
            </el-form>
            <el-form
                class="form"
                @submit.native.prevent
                ref="form"
                :model="form"
                label-width="90px"
            >
                <el-form-item label="16进制">
                    <el-input v-model="form.hex"></el-input>
                </el-form-item>
                <el-form-item label="RGB">
                    <el-input v-model="form.rgb"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <pre :style="{background:color}">
            {
                color: {{form.hex}};
                background: rgb({{form.rgb}});
            }
        </pre>
    </div>
</template>

<script>
import comHeader from "@/components/header/";

export default {
    //组件名
    name: "root",
    //实例的数据对象
    data() {
        return {
            form: {
                r: 6,
                g: 6,
                b: 6,
                hex: "#666",
                rgb: "6,6,6"
            },
            color: "#666",
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        change(value,type){
            console.log(value,type)
            if(!value||value<0){
                this.form[type]=0
            }else if(value>255){
                this.form[type]=255
            }else{
                this.form[type]=parseInt(value)
            }
            this.setHexAndRgb()
        },
        setHexAndRgb(){
            const {r,g,b}=this.form
            const hex= this.rgb2Hex(`rgb(${r},${g},${r})`)
            this.form.hex=hex;
            this.color=hex;
        },
        hex2Rgb(hex) {
            //十六进制转为RGB
            let rgb = []; // 定义rgb数组
            if (/^\#[0-9A-F]{3}$/i.test(hex)) {
                //判断传入是否为#三位十六进制数
                let sixHex = "#";
                hex.replace(/[0-9A-F]/gi, function(kw) {
                    sixHex += kw + kw; //把三位16进制数转化为六位
                });
                hex = sixHex; //保存回hex
            }
            if (/^#[0-9A-F]{6}$/i.test(hex)) {
                //判断传入是否为#六位十六进制数
                hex.replace(/[0-9A-F]{2}/gi, function(kw) {
                    rgb.push(eval("0x" + kw)); //十六进制转化为十进制并存如数组
                });
                return `rgb(${rgb.join(",")})`; //输出RGB格式颜色
            } else {
                console.log(`Input ${hex} is wrong!`);
                return "rgb(0,0,0)";
            }
        },
        rgb2Hex(rgb) {
            if (/^rgb\((\d{1,3}\,){2}\d{1,3}\)$/i.test(rgb)) {
                //test RGB
                let hex = "#"; //定义十六进制颜色变量
                rgb.replace(/\d{1,3}/g, function(kw) {
                    //提取rgb数字
                    kw = parseInt(kw).toString(16); //转为十六进制
                    kw = kw.length < 2 ? 0 + kw : kw; //判断位数，保证两位
                    hex += kw; //拼接
                });
                return hex; //返回十六进制
            } else {
                console.log(`Input ${rgb} is wrong!`);
                return "#000"; //输入格式错误,返回#000
            }
        }
    },
    //生命周期函数 请求写在created中
    created() {},
    beforeMount() {},
    mounted() {},
    //组件
    components: {
        comHeader
    },
    //监视
    watch: {},
    //过滤器
    filters: {},
    //自定义指令
    directive: {}
};
</script>

<style lang="less">
.form-box {
    display: flex;
    justify-content: space-around;
    padding: 22px 0 0;
}
.form {
    width: 300px;
}
</style>
