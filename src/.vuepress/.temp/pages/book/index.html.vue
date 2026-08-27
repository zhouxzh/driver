<template><div><p>本教程 <a href="https://zhouxzh.github.io/driver/" target="_blank" rel="noopener noreferrer">SiC MOSFET 驱动电路及应用</a> 由 zhouxzh、DarentTheYang、DNFfafa 联袂编写。</p>
<p>学习本教程以前，建议先学习电路课程，推荐教材为《电路》邱关源著，第六版。</p>
<h2 id="sic-mosfet的发展历史" tabindex="-1"><a class="header-anchor" href="#sic-mosfet的发展历史"><span>SiC MOSFET的发展历史</span></a></h2>
<p>碳化硅场效应管的历史可以追溯到 20 世纪 70 年代，当时人们开始研究用于功率器件的碳化硅材料。1989 年，碳化硅正式被用于功率器件领域。第一个碳化硅功率晶体管于 2008 年以 1200 V 结型场效应晶体管（JFET）的形式推向市场。硅基 MOSFET 在 70 年代和 80 年代逐渐成熟，具有垂直导电路径和平面栅结构，随后在 90 年代发展出沟槽栅结构。</p>
<h2 id="sic-mosfet的特点" tabindex="-1"><a class="header-anchor" href="#sic-mosfet的特点"><span>SiC MOSFET的特点</span></a></h2>
<p>据 Cree（现 Wolfspeed）公司称，该公司率先推出商用 SiC MOSFET。SiC 相对于硅有三个主要优点：更高的临界击穿场、更高的热导率和更宽的带隙。与硅 MOSFET 和 IGBT 相比，SiC MOSFET 具有更高的热导率（4H-SiC 约为 490 W/m·K，远高于 Si 的约 148 W/m·K）和更高的电流密度。SiC MOSFET 相对于 Si MOSFET 的另一个优点是，当温度从 25 °C 上升到 135 °C 时，SiC MOSFET 的导通电阻典型增幅远小于 Si MOSFET。此外，SiC MOSFET 相对于 Si IGBT 电机驱动系统的一个显著优点是，它能够在同一外壳内集成电机控制器和逆变器，使驱动系统更容易嵌入电机组件。</p>
<h2 id="sic-mosfet的应用场景" tabindex="-1"><a class="header-anchor" href="#sic-mosfet的应用场景"><span>SiC MOSFET的应用场景</span></a></h2>
<p>SiC MOSFET 比其他功率器件（如硅 MOSFET 和 IGBT）更高效。它们具有比硅 MOSFET 和 IGBT 更低的开关损耗和导通损耗。SiC MOSFET 还具有比硅 MOSFET 和 IGBT 更高的开关频率，这意味着 SiC MOSFET 可以在更高频率下运行，从而可以采用更小的磁性元件并获得更高的功率密度。SiC MOSFET 用于各种应用，例如太阳能逆变器、电机驱动、电动汽车和电源，也用于无线充电和 DC-DC 转换器等高频开关应用。</p>
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


