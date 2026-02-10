# Конфигурации линтеров

[![npm version](https://img.shields.io/npm/v/@icw82/eslint-configs.svg)](https://www.npmjs.com/package/@icw82/eslint-configs)

## Установка

```sh
npm i -D @icw82/eslint-configs
```

Если `eslint.config.mjs` отсутствует — создать.

В `eslint.config.mjs` поместить строку:

```js
export { config as default } from '@icw82/eslint-configs'
```

## Использование

## Разработка

```sh
git clone https://github.com/icw82/eslint-configs.git

# Установка npm-пакетов
npm i

# Сборка пакета
npm run build

# Просмотр конечного содержимого пакета
npm pack --dry-run

# Инспекция конфигурации
npx eslint --inspect-config
```

### Публикация вручную

```sh
# Текущий реестр пакетов. Должен быть https://registry.npmjs.org/
npm config get registry

# Авторизация
npm login

# Текущий логин
npm whoami

# Публикация
npm publish --access public
```
