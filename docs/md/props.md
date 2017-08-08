| Name             | Type            | Default          | Description                                                                        |
|------------------|-----------------|------------------|------------------------------------------------------------------------------------|
| startDate        | Date            |                  | 开始时间                                                                             |
| endDate          | Date            |                  | 结束时间                                                                             |
| defaultStartDate | Date            |                  | 默认开始时间                                                                             |
| defaultEndDate   | Date            |                  | 默认结束时间                                                                             |
| disabled         | bool            |                  | 禁用                                                                                 |
| startMinDate     | Date            |                  | 开始时间最小可选时间                                                                         |
| startMaxDate     | Date            |                  | 开始时间最大可选时间                                                                         |
| endMinDate       | Date            |                  | 结束时间最小可选时间                                                                         |
| endMaxDate       | Date            |                  | 结束时间最大可选时间                                                                         |
| ranges           | array           | [今日, 昨天, 本周, 本月] | 快捷选项， 可以自定义选值范围                                                                    |
| placement        | string          | `bottomRight`    | 日历弹出位置: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` |
| onChange         | function        |                  | 日期改变后的回调函数，返回 `beginDate` `endDate` 两个值                                            |
| onSelect         | function        |                  | 在日历面板上选择后的回调函数，返回 `date`, `type` 两个值                                               |
| locale           | object          |                  | 国际化对应的语言描述                                                                         |
| format           | string or array | `YYYY/MM/DD`     | 日期格式化, 可以设置数组  `['YYYY-MM-DD',' - ', 'YYYY-MM-DD']`                                |
