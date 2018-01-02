## API
| Name              | Type                                                                                                 | Default         | Description                       |
|-------------------|------------------------------------------------------------------------------------------------------|-----------------|-----------------------------------|
| value             | array(moment, moment)                                                                                |                 | 值  `受控`                           |
| defaultValue      | array(moment, moment)                                                                                |                 | 默认值                               |
| onChange          | function(`value`:array(moment, moment))                                                              |                 | 值改变后的回调函数                         |
| onToggle          | function(`show`:boolean)                                                                             |                 | 打开或者关闭日历版本的回调函数                   |
| onOk              | function(`value`:array(moment, moment))                                                              |                 | 点击 `Ok` 按钮后的回调函数                  |
| placeholder       | string                                                                                               |                 | 没有值时候默认显示内容                       |
| renderPlaceholder | function(`placeholder`:node, `value`:array(moment, moment))                                          |                 |                                   |
| format            | string                                                                                               | `YYYY-MM-DD`    | 日期显示格式化                           |
| locale            | object                                                                                               | `defaultLocale` | 本地化对应的语言描述                        |
| ranges            | array                                                                                                | `[...]`         | 快捷项配置                             |
| disabled          | boolean                                                                                              |                 | 禁用组件                              |
| disabledDate      | function(`date`:moment, `selectValue`:array(moment, moment), `selectedDone`:boolean, `type`:string ) |                 | 禁用日期                              |
| align             | string                                                                                               | `left`          | 对齐方式，选项 `left`, `right`           |
| hoverRange        | "week", "month" or function(`date`: moment)                                                          |                 | 点击日期时将选中的日期范围                     |
| oneTap            | boolean                                                                                              | `false`         | 是否点击一次就选定日期范围，可[配合 hoverRange 使用](#单击模式) |
| cleanable         | boolean                                                                                              | `true`          | 可以清除                              |
| isoWeek           | boolean                                                                                              |                 | ISO 8601 标准， 每个日历星期从星期一开始，星期日为第7天 |
