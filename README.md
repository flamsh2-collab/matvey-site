# site-template · минимальный Astro-блог + программный слой

> Готовый каркас сайта для скилла «SEO-завод». Минимальный блог (content collections) + демо длинного хвоста (страницы услуга×район через getStaticPaths) + SEO/GEO-обвязка (sitemap, RSS, llms.txt, JSON-LD).

## Структура
```
astro.config.mjs            # site + @astrojs/sitemap
src/content.config.ts       # коллекция blog (схема статьи)
src/content/blog/           # сюда фабрика кладёт .md-статьи (есть пример)
src/layouts/BaseLayout.astro# мета + JSON-LD + sitemap/RSS-ссылки
src/pages/index.astro       # главная (список статей)
src/pages/blog/index.astro  # список блога
src/pages/blog/[slug].astro # страница статьи (getStaticPaths + Article JSON-LD)
src/pages/[usluga]-[rajon].astro  # ПРОГРАММНЫЙ СЛОЙ: услуга×район (длинный хвост)
src/data/services.json      # данные для программного слоя (замени своими)
src/pages/rss.xml.js        # RSS
public/llms.txt             # индекс для ИИ-поисковиков (GEO)
```

## Запуск
```bash
npm install
npm run dev      # локальный просмотр
npm run build    # production (build проходит → деплой)
```

## Как агент это использует
- По Astro Docs MCP агент дополняет/правит конфиг под актуальную версию Astro.
- Статьи блога — кладёт в `src/content/blog/` (формат — как `primer-statyi.md`).
- Длинный хвост — наполняет `src/data/services.json`; `[usluga]-[rajon].astro` генерирует страницу под каждую комбинацию (3×4=12 в демо; 10×30=300 на реальных данных).
- GEO — пополняет `public/llms.txt`, sitemap/RSS генерируются автоматически.

## Деплой
`../ИНСТРУКЦИЯ_ДЕПЛОЙ.md` — Vercel / Netlify / GitHub Pages (автодеплой по пушу).
