# SiC与GaN驱动电路

本教程《SiC MOSFET驱动电路及应用》是一本关于 SiC 与 GaN 功率器件驱动电路的电子书，由 zhouxzh、DarentTheYang、DNFfafa 联袂编写。

在线地址：<https://zhouxzh.github.io/driver/>

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

静态站点输出到 `src/.vuepress/dist`。

## 部署到 GitHub Pages

Linux/macOS：

```bash
bash deploy.sh
```

Windows：

```powershell
.\deploy.ps1
```

部署脚本会将构建产物推送到 `deploy` 分支，GitHub Pages 应配置为从该分支发布。
