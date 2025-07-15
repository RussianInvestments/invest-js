"use strict";
const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');
const defaultTypes = require('@digitalroute/cz-conventional-changelog-for-jira/types');

module.exports = custom({
  types: {
    ...defaultTypes,
    perf: {
      description: 'Изменения направленные на улучшение производительности',
    },
    build: {
      description: 'Изменения, которые влияют на сборку проекта или внешние зависимости (npm, typescript, webpack, etc.)',
    },
    ci: {
      description: 'Изменения в файлах и скриптах настройки CI',
    },
    chore: {
      description: 'Изменения, которые не влияют на код или тесты (например, обновление документации)',
    },
    refactor: {
      description: 'Изменения, которые не исправляют ошибки или добавляют новый функционал',
    },
    docs: {
      description: 'Изменения, которые касаются только документации',
    },
    style: {
      description: 'Изменения, которые не влияют на код (форматирование, пробелы, точки с запятой)',
    },
    test: {
      description: 'Добавление отсутствующих тестов или исправление существующих тестов',
    },
    revert: {
      description: 'Отмена предыдущего коммита',
    },
    fix: {
      description: 'Исправление ошибки',
    },
    feat: {
      description: 'Добавление нового функционала',
    }
  },
});
