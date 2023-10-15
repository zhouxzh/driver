---
title: 第1章 宽禁带半导体
author: 周贤中 邓南发
date: '2023-07-09'
# mathjax:
#   presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---


## 什么是宽禁带半导体

宽禁带半导体（Wide-bandgap semiconductors，WBGs）是一种半导体材料，其带隙比传统半导体更大。

带隙是半导体中价带和导带之间的能量差。宽禁带半导体的带隙比传统半导体更大，因此它们可以在更高的电压、温度和频率下运行。由于宽禁带材料的带隙更大，因此它们可以承受更高的电场强度，从而使电子在材料中移动得更快。

传统半导体如硅的带隙在0.6-1.5eV（电子伏特）范围内，而宽禁带材料的带隙在2eV以上。由于宽禁带材料的带隙更大，因此它们可以在更高的电压、温度和频率下运行。宽禁带半导体用于各种应用，例如太阳能逆变器、电机驱动、电动汽车和电源。
一些宽禁带半导体的例子包括：硅碳化物（SiC）、氮化镓（GaN）、氧化钛（TiO<sub>2</sub>）、氮化铝（AlN）、金刚石和氧化锌（ZnO）。这些材料的带隙比传统半导体更大，因此它们可以在更高的电压、温度和频率下运行。

常见的半导体的物理性质如下表所示：
|特性|Si|GaAs|GaN|4H-SiC|β-Ga<sub>2</sub>O<sub>3</sub>|Diamond|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|禁带宽度|1.1|1.43|3.4|3.25|4.85|5.5|
|相对介电常数|11.8|12.9|9|9.7|10|5.5|
|电子迁移率(cm<sup>2</sup>/V·s)|1480|8400|1250|1000|300|2000|
|饱和速度(10<sup>7</sup>cm/s)|1|1.2|2.5|2|2|1|
|击穿场强(MV/cm)|0.3|0.4|3.3|2.5|8|10|
|热导率(M/cm·K)|1.5|0.5|2.3|4.9|0.1-0.3|20|
|巴利加优值|1|14.7|846|317|3334|24660|

SiC（碳化硅）是一种由硅（Si）和碳（C）组成的化合物半导体材料。上面的表格显示SiC具有优异的介电击穿场强度（击穿场）和带隙（能隙），分别比Si大10倍和3倍。因此，作为制作功率半导体器件的材料，SiC可以超越Si。SiC具有各种多晶型（晶体多态性），每种多晶型都显示出不同的物理特性。对于功率器件，4H-SiC被认为是理想的。

## 应用

SiC的介电击穿场强度比Si高，这允许制造具有比Si器件具有更高杂质浓度和更薄厚度的漂移层的高击穿电压功率器件。这导致具有非常低单位面积导通电阻的高击穿电压器件。与Si相比，漂移层电阻每个面积可以在相同的击穿电压下理论上降低到1/300。使用SiC可以实现同时具有“高击穿电压”，“低导通电阻”和“高速度”的大多数载流子器件（肖特基势垒二极管和MOSFET）。此外，其带隙大约是Si的3倍，使得可以在更高温度下操作功率器件（尽管由于包装的耐热可靠性限制，目前保证温度约为150°C至175°C，但随着包装技术的进步，可以实现保证温度高于200°C）。

碳化硅等宽禁带半导体的应用主要分布在电力电子器件、新能源汽车、光伏、机车牵引和微波通讯器件等领域。碳化硅半导体以其制作的器件具有耐高温、耐高压、高频、大功率、抗辐射等特点，具有开关速度快、效率高的优势，可大幅降低产品功耗、提高能量转换效率并减小产品体积，主要应用于以5G通信、国防军工、航空航天为代表的射频领域和以新能源汽车、“新基建”为代表的电力电子领域，在民用、军用领域均具有可观的市场前景。

## 常用的SiC MOSFET器件与模块

## 表1：

| 制造商 | SIC MOS模块命名方式 | 命名含义 | 命名规则|
| :-----: | :-----: | :-----: |:-----: |
| Cree/Wolfspeed | C3M0120065K | 工业级第三代，导通电阻120mΩ额定电压650V的SIC MOS |C:工业级   3:第三代  120:导通电阻   65:额定电压 |
| 意法半导体 | SCT20N120 | 额定电压1200v,额定电流20A导通电阻189mΩ，HiP247封装的功率SIC MOS|STG:意法半导体SIC MOS模块   20:额定电流    120:额定电压|
 三菱电机 | BM080N120K | 额定电压等级为1200V,导通电阻88mΩ，电流为36A，封装为TO-247-4的N系列SIC MOS模块|BM:SIC MOS模块  080:导通电阻  N:系列  120:额定电压类型  |
|日立|MSM800FS33ALT|额定电压3300V，额定电流800A的SIC MOS|M:模型  S:SIC  M:2合1  800:额定电流  FS:封装类型  6:额定电压  ALT:芯片类型|
|英飞凌|IMW120R45M1|导通电阻为45mΩ,额定电压1200V，T0247-9封装类型的M1系列SIC MOS|I:英飞凌  M:MOSFET  W:封装  120:额定电压  R:标识分隔作用  45:导通电阻  M1:SIC第一代系列|




## 表2：
下表为意法半导体生产的SIC MOS模块系列分类：
| 系列     | Gen2                            | Gen3                        | Gen3               | Gen1           | Gen2                                | Gen3                    | Gen1                         |
| -------- | ------------------------------- | --------------------------- | ------------------ | -------------- | ----------------------------------- | ----------------------- | ---------------------------- |
| 击穿电压 | 650V                            | 650V                        | 700/900V           | 1200V          | 1200V                               | 1200V                   | 1700V                        |
| 导通电阻 | 18-55mΩ                         | 14-55mΩ                     | 11mΩ               | 52-520mΩ       | 21-75mΩ                             | 17-70mΩ                 | 65-700mΩ                     |
| 主要应用 | OBC&DC-DC、可再生能源、工业驱动 | OBC&DC-DC、太阳能、电源供应 | DC-DC、可再生 能源 | HVAC、电源供应 | OBC&DC-DC、逆变器、充电桩、工业驱动 | 逆变器、DC-DC、电源供应 | DC-DC、电源供应 、可再生能源 |




## 表3：
| 厂商     | 系列                         | 分类               | 型号               | VDSS/VCES | ID/IC   | RON/mΩ    | 状态     |
| -------- | ---------------------------- | ------------------ | ------------------ | --------- | ------- | --------- | -------- |
| 日立     | 全SiC                        | 2in1               | MSM600GS33ALT      | 3300      | 600     |           | 开发中   |
| 日立     | 全SiC                        | 2in2               | MSM800GS33ALT      | 3300      | 800     |           | 开发中   |
| 日立     | 全SiC                        | 2in3               | MSM900GS17CLT      | 1700      | 900     |           | 开发中   |
| 日立     | 全SiC                        | Chopper            | MSL800FS33PLT      | 3300      | 800     |           | 开发中   |
| 日立     | 全SiC                        | Chopper            | MSL800FS33NLT      | 3300      | 800     |           | 开发中   |
| 日立     | 全SiC                        | 2in1 SBD           | MDM1200F33-C3      | 3300      | 1200    |           | 批量生产 |
| 日立     | 混合SiC                      | 1in1               | MBN1200F33F-C3     | 3300      | 1200    |           | 批量生产 |
| 日立     | 混合SiC                      | 1in2               | MBN1800F33F-C3     | 3300      | 1800    |           | 批量生产 |
| 日立     | 混合SiC                      | 2in1               | MBM1000FS17G2-C    | 1700      | 1000    |           | 批量生产 |
| ROHM     | 封装器件                     | SiC MOSFET         | 第2代(Planar)      | 1200      | 10~40   | 80~450    | 批量生产 |
| ROHM     | 封装器件                     | SiC MOSFET         | 第3代(Planar)      | 1700      | 3.7~6   | 750~1150  | 批量生产 |
| ROHM     | 封装器件                     | SiC MOSFET         | 第3代(Trench)      | 650       | 21~118  | 17~120    | 批量生产 |
| ROHM     | 封装器件                     | SiC MOSFET         | 第4代(Trench)      | 1200      | 17~95   | 22~160    | 批量生产 |
| ROHM     | 封装器件                     | SiC MOSFET         | 第4代(Trench)      | 750       | 31~105  | 13~45     | 批量生产 |
| ROHM     | 封装器件                     | SiC MOSFET         | 第5代(Trench)      | 1200      | 24~81   | 18~62     | 批量生产 |
| ROHM     | 封装器件                     | SiC SBD            | 第2代              | 650       | 6~40    |           | 批量生产 |
| ROHM     | 封装器件                     | SiC SBD            | 第3代              | 1200      | 5~40    |           | 批量生产 |
| ROHM     | 封装器件                     | SiC SBD            | 第3代              | 650       | 2~20    |           | 批量生产 |
| ROHM     | 封装器件                     | 全SiC功率模块      | 半桥               | 1200      | 80~576  |           | 批量生产 |
| ROHM     | 封装器件                     | 全SiC功率模块      | 半桥               | 1700      | 250     |           | 批量生产 |
| ROHM     | 封装器件                     | 全SiC功率模块      | chopper            | 1200      | 134~576 |           | 批量生产 |
| ROHM     | 裸片                         | SiC MOSFET         | 第2代              | 650       | 29      | 120       | 批量生产 |
| ROHM     | 裸片                         | SiC MOSFET         | 第3代              | 1200      | 10~68   | 45~450    | 批量生产 |
| ROHM     | 裸片                         | SiC MOSFET         | 第3代              | 650       | 30~118  | 17~80     | 批量生产 |
| ROHM     | 裸片                         | SiC MOSFET         | 第4代              | 1200      | 24~95   | 22~105    | 批量生产 |
| ROHM     | 裸片                         | SiC SBD            | 第2代              | 650       | 6~15    |           | 批量生产 |
| ROHM     | 裸片                         | SiC SBD            | 第2代              | 1200      | 5~30    |           | 批量生产 |
| ROHM     | 裸片                         | SiC SBD            | 第2代              | 1700      | 10~50   |           | 批量生产 |
| ONSEMI   | M1                           | ..120SC1           |                    | 1200      | 10~103  | 10~160    | 批量生产 |
| ONSEMI   | M2                           | ..170M1            |                    | 1700      | 4.2/81  | 28/960    | 批量生产 |
| ONSEMI   | M2                           | ..065SC1           |                    | 650       | 30~163  | 12~95     | 批量生产 |
| ONSEMI   | M3                           | ..090SC1           |                    | 900       | 44~148  | 20~60     | 批量生产 |
| ONSEMI   | M3S                          |                    |                    | 1200      | 34~89   | 22~65     | 批量生产 |
| ONSEMI   | M3T                          |                    |                    | 1200      | 74~127  | 14/22     | 批量生产 |
| INFINEON | CoolSiC™ MOSFET, 3-Level     |                    | F3L11MR12W2M1_B74  | 1200      |         | 11.3      | 批量生产 |
| INFINEON | CoolSiC™ MOSFET, 4-Level     |                    | F3L8MR12W2M1HP_B11 | 1200      |         | 8.1       | 批量生产 |
| INFINEON | CoolSiC™ MOSFET, Fourpack    | F4-...MR12W…       |                    | 1200      |         | 11~45     | 批量生产 |
| INFINEON | CoolSiC™ MOSFET, Half-bridge | FF...MR12W...      |                    | 1200      |         | 1.44~33   | 批量生产 |
| INFINEON | CoolSiC™ MOSFET, Sixpack     | FS...MR12...       |                    | 1200      |         | 2.75~52.9 | 批量生产 |
| INFINEON | CoolSiC™ MOSFET Discretes    | IM…65R…M1H         |                    | 650       |         | 22~260    | 批量生产 |
| INFINEON | CoolSiC™ MOSFET Discretes    | ...IM...120R...M1H |                    | 1200      |         | 7~350     | 批量生产 |
| INFINEON | CoolSiC™ MOSFET Discretes    |                    | IMBF170R450M2      | 1700      |         | 450       | 批量生产 |
| INFINEON | CoolSiC™ MOSFET Discretes    |                    | IMBF170R650M2      | 1700      |         | 650       | 批量生产 |
| INFINEON | CoolSiC™ MOSFET Discretes    |                    | IMBF170R1K0M2      | 1700      |         | 1000      | 批量生产 |


## 挑战

碳化硅功率器件面临的挑战主要包括缩放的限制因素、与碳化硅器件较小的管芯尺寸相关的散热问题、管芯上与封装相关的应变以及衬底可用性。此外，碳化硅功率器件的制造成本较高，且生产工艺相对复杂。不过，随着技术的不断发展，这些问题将逐渐得到解决。

随着技术的不断发展，碳化硅衬底的尺寸逐渐扩大，成本也会逐渐降低。例如，8英寸SiC衬底将比6英寸在成本降低上具有明显优势。但是目前实际上仅有Wolfspeed实现8英寸碳化硅量产，而大多数国际企业则将8英寸碳化硅衬底的量产节点定在2023年左右。