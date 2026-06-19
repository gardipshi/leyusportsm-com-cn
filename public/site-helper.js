/**
 * public/site-helper.js
 * 生成引导卡片、关键词标识与说明提示
 */

(function () {
  'use strict';

  // 基础配置
  const CONFIG = {
    siteUrl: 'https://leyusportsm.com.cn',
    keyword: '乐鱼体育',
    tagColor: '#1e90ff',
    cardBg: '#f5f9ff'
  };

  // 卡片内容集合
  const cardData = {
    title: '欢迎来到 ' + CONFIG.keyword,
    description: '我们提供专业的体育资讯服务。更多内容请访问：',
    linkText: '访问官网',
    linkHref: CONFIG.siteUrl
  };

  // 关键词标签列表
  const keywordTags = [
    '体育资讯',
    '乐鱼体育',
    '赛事动态',
    '运动健康',
    '专业服务'
  ];

  // 提示说明列表
  const tips = [
    '请使用最新版浏览器获得最佳体验。',
    '本站内容仅供参考，不构成任何建议。',
    '如有疑问，请联系客服支持。'
  ];

  // 创建卡片容器
  function createCard() {
    const card = document.createElement('div');
    card.className = 'helper-card';
    card.style.cssText = [
      'background: ' + CONFIG.cardBg + ';',
      'border: 1px solid #d0e2f0;',
      'border-radius: 8px;',
      'padding: 16px;',
      'margin: 12px 0;',
      'box-shadow: 0 2px 4px rgba(0,0,0,0.05);',
      'font-family: sans-serif;'
    ].join(' ');

    const titleEl = document.createElement('h3');
    titleEl.textContent = cardData.title;
    titleEl.style.margin = '0 0 8px 0';
    card.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.textContent = cardData.description;
    descEl.style.margin = '0 0 8px 0';
    card.appendChild(descEl);

    const linkEl = document.createElement('a');
    linkEl.href = cardData.linkHref;
    linkEl.textContent = cardData.linkText;
    linkEl.target = '_blank';
    linkEl.style.cssText = [
      'display: inline-block;',
      'padding: 6px 14px;',
      'background: ' + CONFIG.tagColor + ';',
      'color: #fff;',
      'text-decoration: none;',
      'border-radius: 4px;',
      'font-size: 14px;'
    ].join(' ');
    card.appendChild(linkEl);

    return card;
  }

  // 生成关键词徽章
  function createBadge(text) {
    const badge = document.createElement('span');
    badge.textContent = text;
    badge.style.cssText = [
      'display: inline-block;',
      'padding: 4px 10px;',
      'margin: 4px;',
      'background: ' + CONFIG.tagColor + ';',
      'color: #fff;',
      'border-radius: 12px;',
      'font-size: 12px;',
      'font-weight: 600;'
    ].join(' ');
    return badge;
  }

  function createBadgeContainer() {
    const container = document.createElement('div');
    container.className = 'helper-badges';
    container.style.margin = '12px 0';

    keywordTags.forEach(function (tag) {
      container.appendChild(createBadge(tag));
    });

    return container;
  }

  // 生成访问说明列表
  function createTipList() {
    const list = document.createElement('ul');
    list.style.cssText = [
      'padding-left: 20px;',
      'margin: 8px 0;',
      'color: #444;',
      'font-size: 13px;'
    ].join(' ');

    tips.forEach(function (tip) {
      const item = document.createElement('li');
      item.textContent = tip;
      list.appendChild(item);
    });

    return list;
  }

  // 组装完整提示区域
  function assembleHelper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'site-helper-wrapper';
    wrapper.setAttribute('data-seed', '6628f98e2ef09283');

    wrapper.appendChild(createCard());
    wrapper.appendChild(createBadgeContainer());
    wrapper.appendChild(createTipList());

    return wrapper;
  }

  // 插入到页面合适位置
  function injectHelper() {
    const target = document.querySelector('main, article, .content, #content, body');
    if (!target) return;

    const helper = assembleHelper();
    if (target.firstChild) {
      target.insertBefore(helper, target.firstChild);
    } else {
      target.appendChild(helper);
    }
  }

  // 等待 DOM 就绪
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHelper);
  } else {
    injectHelper();
  }
})();