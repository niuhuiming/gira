##### 创建项目

```bash
npx create-react-app jira --template typescript
```

##### 使用 commitlint

网站：https://github.com/conventional-changelog/commitlint

1. `npm install --save-dev @commitlint/config-conventional @commitlint/cli`
2. `echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`
3. `npm install husky --save-dev`
4. `npx husky install`
5. `npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'`
6. 将文件`commitlint.config.js`编码改为`UTF-8`
7. 此时提交信息不能再随便填写，配置完成

commitlint 提交规范：

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改，比如改变构建流程，或者增加依赖库、工具等     |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| **feat** | 新特性，新功能                                         |
| **fix**  | 修改 bug                                               |
| pref     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一版本                                         |
| style    | 代码格式修改，注意不是 css 修改                        |
| test     | 测试用例修改                                           |

##### 使用 prettier

网站：https://prettier.io/docs/en/install.html#eslint-and-other-linters

1. `npx mrm@2 lint-staged`

2. `npm install --save-dev lint-staged`

3. `echo {}> .prettierrc.json`

4. 将文件`.prettierrc.json`编码改为`UTF-8`

5. 创建文件`.prettierignore`，添加如下内容：

   ```
   # Ignore artifacts:
   build
   coverage
   ```

6. `npm i eslint-config-prettier`

7. 在`package.json`中添加`prettier`：

   ```json
   "eslintConfig": {
     "extends": [
       "react-app",
       "react-app/jest",
       "prettier"
     ]
   },
   ```

8. 在`package.json`中配置如下设置：

   ```json
   "lint-staged": {
     "*.{js,css,md,ts,tsx}": "prettier --write"
   }
   ```

9. 此时提交代码就会自动格式化，配置完成
