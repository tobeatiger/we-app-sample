module.exports = { 
    serverPort: '8765', 

    // 小程序 appId 和 appSecret 
    // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
    appId: 'wx183e67485c7333c3', 
    appSecret: '6096520178aac095b89d277c1c1cd4a1', 

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    mongoHost: '127.0.0.1', 
    mongoPort: '27017', 
    mongoUser: 'weapp', 
    mongoPass: 'weapp-dev', 
    mongoDb: 'weapp'
};
