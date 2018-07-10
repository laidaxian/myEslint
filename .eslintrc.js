module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    "rules": {
        "key-spacing": ["error", { "align": "colon" }],//属性垂直对齐
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        "for-direction": "error",
        "camelcase":[1,{ "properties": "always" }],//驼峰命名
        "no-trailing-spaces":[1,{"skipBlankLines": true}],//不允许行末空格
        "linebreak-style": [
            "error",
            "unix"
        ],
        //单引号: yes
        "quotes": [
            "error",
            "single"
        ],
        //分号：no
        "semi": [
            "error",
            "never"
        ],
        // allow async-await
        "generator-star-spacing": "off",
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};