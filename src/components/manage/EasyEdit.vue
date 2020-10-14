<template>
    <div @click="disabled ? openEdit($event.target) : null">
        <textarea :value="value"
                  :disabled="disabled"
                  v-if="textarea"
                  @input="test($event.target,$event.target.value)"
                  @blur="closeEdit"
                  @change="callback">
        </textarea>
        <input :value="value"
               :disabled="disabled"
               v-else
               @input="test($event.target,$event.target.value)"
               @blur="closeEdit"
               @change="callback">
    </div>
</template>

<script>
    export default {
        name: "EasyEdit",
        props: {
            value: {
                require: true
            },
            re: {
                type: RegExp,
                default() {
                    return /((^[1-9]\d*?|^0)\.\d{0,2}$|^[1-9]\d*?$|^0$)/
                }
            },
            textarea: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                disabled: true,
                value_: ''
            }
        },
        methods: {
            openEdit(e) {
                this.disabled = false
                setTimeout(() => {
                    e.focus()
                }, 0)
            },
            closeEdit(e) {
                this.disabled = true
            },

            // 处理表单验证
            validate(value) {
                while (value && !this.re.test(value)) {
                    value = value.replace(/.$/, '')
                }
                return value
            },

            test(e) {
                e.value = this.validate(e.value)
                this.value_ = e.value
            },
            callback() {
                this.value_ = this.value_.replace(/\.$/, '')
                this.$emit('change', this.value_)
            }
        }
    }
</script>

<style scoped lang="less">
    input {
        width: 100%;
        outline: none;
        border: none;
        text-align: center;
        box-sizing: border-box;
        transition: all .3s linear;
        color: inherit;
        font-family: inherit;
        font-size: inherit;


        &:focus {
            transition: all .3s linear;
            box-shadow: inset 0 0 1px 1px #409EFF;
        }

        &[disabled] {

            cursor: pointer;
            background-color: transparent;
        }
    }

    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        outline: none;
        border: none;
        color: inherit;
        font-size: inherit;
        font-family: inherit;

        &:focus {
            transition: all .3s linear;
            box-shadow: inset 0 0 1px 1px #409EFF;
        }

        &[disabled] {

            box-shadow: none;
            cursor: pointer;
            background-color: transparent;
        }
    }
</style>