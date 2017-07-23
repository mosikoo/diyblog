const contentRequireJs = '### requireJs\n\
虽然目前requireJs已经不再流行，但是它的思想在前端模块化历程中还是值得学习的。\n\
翻看requireJs的源码，个人觉得基本的难点在于：\n\
* 它的基本逻辑比较复杂，模块依赖模块，流程互相嵌套\n\
* Module的状态及context的各种变量太多，让人混淆\n\n\
所以本篇主要围绕着这两点去讲，理清基本的思路（抛开config各种配置）\n\n\
#### 入口\n\
##### require\n\
默认创建`context`，调用`context.makeRequire()`返回`require`\n\
除了初始化的`req({})`及`req(cgf)`；其他js执行过程都是require(deps, callback) —>{script监听事件`context.onScriptLoad` —> `context.completeLoad(data.id);` —> 获取模块且初始化} —> 执行nextTick\n\
##### define\n\n\
> `test` \n\n\
基本用法最后只有一步 `globalDefQueue.push([name, deps, callback]);`,name不定义为`null` ，\n\
然后执行script监听事件`context.onScriptLoad`\n\
```js\n\
console.log(\'test\')\n\
```\n\n\
[baidu](http://baidu.com)\
';

const contentMongoDB = '### MongoDB\n\
\
> ODM: 对象数据库管理\n\n\
\
#### 文档\n\n\
\
{"name": "tom", age: 1} 表示为对象\n\n\
\
#### 集合\n\n\
\
集合是一组文档，如同关系数据库中的表, 多个集合组成数据库，一个MongoDB实例可以承载多个数据库';

module.exports = [
  {
    type: 'Article',
    date: new Date('2017-7-20').getTime(),
    content: contentRequireJs,
    title: 'RequireJs'
  },
  {
    type: 'Article',
    date: new Date('2017-7-19').getTime(),
    title: 'MongoDB',
    content: contentMongoDB
  },
  {
    type: 'Link',
    name: 'GIT',
    href: 'https://github.com/mosikoo'
  },
  {
    type: 'User',
    name: 'chenqiu',
    pwd: '123456'
  }
];
