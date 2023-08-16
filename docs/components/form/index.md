# 表单 - Form
:::demo Basic
  ```vue
<template>
  <SForm :model="model" ref="loginForm">form</KForm>
</template>

<script setup>
import { ref, reactive } from "vue";

const model = reactive({
  username: "aaa",
});

const rules = reactive({
  username: [{ required: true, message: "用户名为必填项" }],
});


const loginForm = ref();
</script>
  ```
:::
