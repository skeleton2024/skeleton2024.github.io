# EEG 睡眠分期与 sRNAdeep 复现

skeleton 的花园 · 研究复现专题

两项围绕实验复现的实践：在 Sleep-EDF 上完成 EEG 睡眠分期课程项目，并对 sRNAdeep 公开材料进行双轨实现和稳健性复查。

## 项目起点

怎样把一次实验变成可以重新运行的研究记录？

Sleep-EDF 课程项目采用按受试者划分数据的方式，整理代码、结果表和课程报告；sRNAdeep 复现则围绕公开材料建立双轨实现，比较多种子、多折运行。两项实践都把实验设置和运行记录作为交付的一部分。

## 我做了什么

- 参与 Sleep-EDF EEG 睡眠分期课程项目，采用按受试者划分数据的方式。
- 完成 sRNAdeep 公开材料的双轨实现，保留多种子、多折结果及运行证据。

## 做出的成果

- Sleep-EDF 项目覆盖 20 名受试者、20,626 个 epoch，完成代码、结果表与课程报告。
- sRNAdeep 保留多种子、多折结果，以及日志、哈希与复现报告。

## 实现过程

1. 明确公开材料版本
2. 数据划分与实现
3. 多种子 / 多折运行
4. 记录日志与哈希
5. 稳健性复查

## 设计取舍与收获

我把数据划分、版本、随机种子和运行记录纳入实验交付，使结果差异可以回到具体设置继续追查。

## 技术与主题

EEG · 实验复现 · 研究记录

## 作品链接

- [sleep-edf-study](https://github.com/skeleton2024/sleep-edf-study)
- [srnadeep-reproduction](https://github.com/skeleton2024/srnadeep-reproduction)
