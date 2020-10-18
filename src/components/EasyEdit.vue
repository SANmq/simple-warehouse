<template>
    <div class="easy-edit" @click="disabled ? openEdit($event.target) : null">
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
                    value = value.substr(0, value.lenth - 1)
                    // value = value.replace(/.$/, '')
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