const INFO_CONFIG: any = {
    baseInfo: [
        {
            name: '姓名',
            value: '王海涛',
        },
        {
            name: '生日',
            value: '1985/03/17',
        },
        {
            name: '所在地',
            value: '成都',
        },
        {
            name: '电话',
            value: '18302876099',
        },
    ],
    skill: {
        frontend: [
            {
                name: 'HTML',
                ability: 5,
                des: '常用标签，问题不大。'
            },
            {
                name: 'CSS   (SASS,LESS)',
                ability: 4,
                des: '系统性学习过。但由于长期使用boostrap，' +
                    '可能很多地方比较生疏，加之对全面布局经验不足，' +
                    '以及对3d应用较少。所以很多地方不熟练，但若有困难应该都能独立解决。'
            },
            {
                name: 'bootstrap',
                ability: 5,
                des: '熟练'
            },
            {
                name: 'JAVASCRIPT (ES6)',
                ability: 5,
                des: 'JS + ES6作为基础比较扎实。在工作过程中，无大问题，遇到问题也能独立解决。但作为基础，知识点很细，范围很广。' +
                    '不敢过于自信，任需反复学习。'
            },
            {
                name: 'TYPESCRIPT',
                ability: 3,
                des: '由于对C++,PHP,JAVA的基础语法有一定了解，所以在学习TS的过程中，较为轻松。' +
                    '在几个自己练习的项目中常用，无大问题。' +
                    '但基础不扎实，也不知道会遇到什么问题。'
            },
            {
                name: 'vue(vue-axios, vuex, vue-loader, vue-router, vuex, vue-cli)',
                ability: 4,
                des: '系统性学习，基础较为扎实。在之前工作中，并没有用完全套。' +
                    '练习写过几个运用全套的小项目。' +
                    '总体来说，问题不大，但任需多使用和指导。'
            },
            {
                name: 'angular',
                ability: 1,
                des: '仅作为学习vue的对比了解'
            },
            {
                name: 'react',
                ability: 1,
                des: '仅作为学习vue的对比了解'
            },
        ],
        backend: [
            {
                name: 'PHP',
                ability: 5,
                des: '系统学习过。在过去工作经验中常用。主要用于：操作数据库，操作文件，上传文件，ftp，sftp部署文件等。'
            },
            {
                name: 'Node',
                ability: 3,
                des: '正在学习。暂时只了解node模块化，文件，express。'
            },
            {
                name: 'Python',
                ability: 1,
                des: '只是了解过语法，没有实践经验。'
            },
            {
                name: 'Mysql',
                ability: 4,
                des: '基本sql语句没有问题，不算精通。主要是对数据库增删改查，没有对性能方面的要求。有提高空间。'
            },
            {
                name: 'Oracle',
                ability: 3,
                des: '系统性学习过，没有实战经验。'
            },
            {
                name: 'Mongodb',
                ability: 3,
                des: '系统性学习过，能用。目前还须参考demo。'
            },
            {
                name: 'Memcache',
                ability: 5,
                des: '之前工作中常用，但是由于没有专业人员指导，我也不确定是否标准，希望未来有人告诉我正确与否。'
            },
            {
                name: 'Redis',
                ability: 1,
                des: '系统性学习过，没有实战，忘的差不多了。'
            }
        ],
        server: [
            {
                name: 'Linux',
                ability: 2,
                des: '系统性学习过。但是很多地方没有操作过，多用于操作文件，权限，进程。没有自己搭建过服务器或虚拟服务器。'
            },
        ],
        tools: [
            {
                name: 'SVN',
                ability: 5,
                des: '系统性学习过。能用命令行，工作实战中用的是tortoisesvn，基本无问题。'
            },
            {
                name: 'Git',
                ability: 4,
                des: '系统性学习过。能用命令行（需看demo），暂无实战经验，需要指导。'
            },
            {
                name: 'Photoshop',
                ability: 4,
                des: '基本操作没有问题。'
            }
        ],
    },
    experience: [
        {
            time: '2010 - 2015',
            company: '外贸行业',
            des: '本人毕业于外贸专业，在毕业的数年中都在外贸行业工作。' +
                '但是由于外贸行业的不景气，看不到前途。' +
                '在2014年，我有幸接触了html和css并对IT行业有了兴趣。' +
                '所以最终决定换行业。'
        },
        {
            time: '2015 - 2016',
            company: '外贸行业',
            des: '在朋友的帮助下，我在这一年时间内，系统学习了HTML，CSS，JS等前端内容。' +
                ''
        },
        {
            time: '2017 - 2019',
            company: '赛贝尔公司',
            des: '在此公司期间，完成了WEB前后端的各项任务。' +
                '主要内容，如：项目工具，后台运营，热更新等' +
                '架构：linux+apache+php+mysql+vue',
        },
    ],
};

export default INFO_CONFIG;