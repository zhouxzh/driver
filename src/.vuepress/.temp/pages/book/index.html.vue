<template><div><p>本教程<a href="https://zhouxzh.github.io/driver/" target="_blank" rel="noopener noreferrer">SiC MOSFET驱动电路及应用</a>由zhouxzh、DarentTheYang、DNFfafa联袂编写。</p>
<p>学习本教程以前，建议先学习电路课，推荐书籍为——《电路》邱关源著，第六版</p>
<h2 id="sic-mosfet的发展历史" tabindex="-1"><a class="header-anchor" href="#sic-mosfet的发展历史"><span>SiC MOSFET的发展历史</span></a></h2>
<p>碳化硅场效应管的历史可以追溯到20世纪70年代，当时研究了与器件相关的碳化硅材料，如MOSFET。然而，建议在1989年正式使用碳化硅用于功率器件。第一个碳化硅功率晶体管于2008年以1200 V结型场效应晶体管（JFET）的形式推向市场。硅金属氧化物栅FETS（MOSFETs）在70年代和80年代变得可行，具有垂直导电路径和平面栅结构，随后在90年代采用“沟槽”排列。</p>
<h2 id="sic-mosfet的特点" tabindex="-1"><a class="header-anchor" href="#sic-mosfet的特点"><span>SiC MOSFET的特点</span></a></h2>
<p>据Cree公司称，该公司创建了第一个SiC MOSFET，SiC相对于硅有三个主要优点：更高的临界击穿场、更高的热导率和更宽的带隙。与硅MOSFET和IGBT相比，SiC MOSFET提供更高的热导率（120-270 W/mK）和更高的电流密度。 SiC MOSFET相对于Si MOSFET的主要优点是，随着温度从25°C上升到135°C，SiC MOSFET的导通电阻增加了20％，而Si MOSFET的导通电阻增加了250％。此外，SiC MOSFET相对于Si IGBT电机驱动系统的一个显著优点是它们能够嵌入电机组件中，在同一外壳内嵌入电机控制器和逆变器。</p>
<h2 id="sic-mosfet的应用场景" tabindex="-1"><a class="header-anchor" href="#sic-mosfet的应用场景"><span>SiC MOSFET的应用场景</span></a></h2>
<p>SiC MOSFET比其他功率器件（如硅MOSFET和IGBT）更高效。它们具有比硅MOSFET和IGBT更低的开关损耗和导通损耗。 SiC MOSFET还具有比硅MOSFET和IGBT更高的开关频率,这意味着SiC MOSFET可以在更高频率下运行，这可能会导致更小的磁性元件和更高的功率密度。SiC MOSFET用于各种应用，例如太阳能逆变器、电机驱动、电动汽车和电源。它们还用于高频开关应用，例如无线充电和DC-DC转换器。</p>
<p>近年来，随着电力电子技术的快速发展，高频、高效、高功率密度的应用需求不断增长。在这一背景下，以碳化硅（SiC）和氮化镓（GaN）为代表的宽禁带半导体材料因其卓越的物理特性，在高频开关、高温运行以及高效率功率转换领域展现出巨大潜力，成为现代电力电子技术的核心驱动力。</p>
<p>本书聚焦于SiC与GaN器件在驱动电路设计中的关键技术与应用实践，旨在为读者提供全面的技术参考和设计指导。书中系统介绍了宽禁带半导体材料的特性及其在高频、高温、高电压环境下的独特优势，并深入探讨了如何针对这些材料的特点设计高效可靠的驱动电路。</p>
<h3 id="主要内容" tabindex="-1"><a class="header-anchor" href="#主要内容"><span>主要内容</span></a></h3>
<ol>
<li>
<p><strong>SiC与GaN器件基础</strong><br>
从材料物理特性入手，分析SiC和GaN的禁带宽度、饱和速度、击穿场强等关键参数及其对电路性能的影响。</p>
</li>
<li>
<p><strong>宽禁带半导体的应用场景</strong><br>
探讨SiC与GaN在新能源汽车、可再生能源系统、工业电源及通信电源等领域中的典型应用，解析其技术优势和市场潜力。</p>
</li>
<li>
<p><strong>驱动电路设计与优化</strong><br>
详细讲解SiC与GaN器件的驱动需求，包括栅极驱动特性、开关速度优化、电磁兼容性（EMC）设计以及热管理策略。书中还提供大量实际案例和仿真分析，帮助读者理解复杂的设计挑战。</p>
</li>
<li>
<p><strong>高频高密度电源系统</strong><br>
结合实际应用，探讨如何利用SiC与GaN器件实现高效、紧凑的高频电源系统设计，并针对驱动电路中的关键问题（如开关损耗、寄生效应等）提供解决方案。</p>
</li>
<li>
<p><strong>未来发展趋势</strong><br>
展望宽禁带半导体技术的发展方向，分析其在人工智能、物联网等新兴领域的潜在应用，为读者提供前沿的技术洞察。</p>
</li>
</ol>
<h3 id="适用人群" tabindex="-1"><a class="header-anchor" href="#适用人群"><span>适用人群</span></a></h3>
<p>本书适用于电力电子工程师、研究生以及对高频功率电路设计感兴趣的学者和从业者。无论您是宽禁带半导体技术的初学者，还是希望深入探索驱动电路优化的设计者，都能从书中获得有价值的知识与启发。</p>
<p>通过阅读本书，您可以全面掌握SiC与GaN器件的特点及其在驱动电路中的应用方法，为开发高效、可靠的电力电子系统奠定坚实基础。</p>
</div></template>


