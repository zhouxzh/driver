<template><div><h1 id="第3章-电气特性" tabindex="-1"><a class="header-anchor" href="#第3章-电气特性"><span>第3章 电气特性</span></a></h1>
<h2 id="时间" tabindex="-1"><a class="header-anchor" href="#时间"><span>时间</span></a></h2>
<h2 id="双脉冲测试" tabindex="-1"><a class="header-anchor" href="#双脉冲测试"><span>双脉冲测试</span></a></h2>
<p>最小化开关损耗仍然是从事SiC器件工作的功率器件工程师面临的主要挑战。 用于测量开关参数并评估SiC MOSFET动态行为的标准测试方法是双脉冲测试 (DPT)。 双脉冲测试可测量器件开启和关闭过程中的能量损耗以及反向恢复参数</p>
<h3 id="双脉冲测试的基础知识" tabindex="-1"><a class="header-anchor" href="#双脉冲测试的基础知识"><span>双脉冲测试的基础知识</span></a></h3>
<p>双脉冲测试一般采用两个一样的SiC MOSEFT器件进行， 一个器件是被测设备 (Device Under Testing, DUT)，第二个器件通常是与DUT相同类型的器件。 注意“高”侧设备上的感性负载，电感用于复制转换器设计中可能存在的电路条件。 使用的仪器包括用于提供电压的电源、用于输出脉冲以触发MOSFET栅极以将其打开以开始传导电流的任意函数发生器 (AFG)，以及用于测量所得波形的示波器。
<img src="@source/book/chapter03/DPTCircuit.svg" alt="双脉冲测试电路"></p>
<h3 id="如何生成双脉冲测试的栅极驱动信号" tabindex="-1"><a class="header-anchor" href="#如何生成双脉冲测试的栅极驱动信号"><span>如何生成双脉冲测试的栅极驱动信号</span></a></h3>
<p>生成栅极驱动信号以执行双脉冲测试的最简单方法是使用任意波形发生器 (AFG)。 AFG可用于生成栅极驱动信号以执行双脉冲测试。 泰克 AFG31000 具有内置双脉冲测试应用程序，可创建具有不同脉冲宽度的脉冲。</p>
<h3 id="如何测量开启和关闭时序以及能量损耗" tabindex="-1"><a class="header-anchor" href="#如何测量开启和关闭时序以及能量损耗"><span>如何测量开启和关闭时序以及能量损耗</span></a></h3>
<p>示波器是捕获双脉冲波形的绝佳工具，因此您可以获得设备的开启和关闭时间参数。 借助泰克 4/5/6 系列 B MSO 和宽带隙双脉冲测试应用软件（选件 WBG-DPT），捕获参数所需的一切都触手可及。 WBG-DPT 选项可根据 JEDEC 和 IEC 标准提供自动开关、定时和二极管反向恢复测量。</p>
<h3 id="测量反向恢复" tabindex="-1"><a class="header-anchor" href="#测量反向恢复"><span>测量反向恢复</span></a></h3>
<p>二极管的反向恢复时间是二极管开关速度的衡量标准，因此会影响转换器设计中的开关损耗。 在第二个脉冲导通期间出现反向恢复电流。 如图所示，二极管在阶段 2 期间处于正向导通状态。当低侧 MOSFET 再次导通时，二极管应立即切换到反向阻断状态； 然而，二极管会在短时间内反向导通，这称为反向恢复电流。 该反向恢复电流转化为能量损耗，直接影响功率转换器的效率。</p>
<p><img src="@source/book/chapter03/DPT.svg" alt="双脉冲测试"></p>
</div></template>


