export const PhoneRules = [
  { required: true, message: "请填写密码" },
  {
    pattern:
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
    message: "输入正确的手机号",
  },
];
export const CodeRules = [
  { required: true, message: "请填写密码" },
  { pattern: /^\d+$/, message: "输入正确的验证码" },
];
