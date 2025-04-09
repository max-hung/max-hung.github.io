import { createApp, h, reactive, ref, onMounted, defineComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import "https://unpkg.com/lucide@latest"
const HomePage = defineComponent({
    name: 'MaxCV',
    setup() {
        const name = '洪立仁'
        const englishName = 'Max'

        const demos = reactive([
            {
                img1: '/img/demo1-1.png',
                img2: '/img/demo1-2.png',
                hover: false,
                a: 'https://max-hung.github.io/demo-1/#/login',
                description: '透過 API 整合物流與訂單數據，自動轉換格式 (如 CSV、XLS)，支援倉儲與標籤流程。'
            },
            {
                img1: '/img/demo2-1.png',
                img2: '/img/demo2-2.png',
                hover: false,
                a: 'https://max-hung.github.io/demo-2',
                description: 'ERP 系統整合多平台 API，自動化訂單與物流處理，提升內部作業效率。'
            },
            {
                img1: '/img/demo3-1.png',
                img2: '/img/demo3-2.png',
                hover: false,
                a: 'https://max-hung.github.io/demo-3',
                description: '內部 AI 問答平台，提升新人培訓效率與知識即時查詢能力。'
            }
        ])

        const skill = ref([
            'Vue 3 / Nuxt 3',
            'Tailwind CSS / SCSS',
            'TypeScript',
            'Pinia / Vuex',
            'RESTful API 整合',
            'Git / CI/CD',
            'PHP',
            'Magento',
            'Laravel',
            'Google Cloud Platform',
            'Google Tag Manager',
            'Cloudflare',
            'Terraform'
        ])
        const tool = ref(['Trello', 'Jira', 'Postman'])
        const isVisible = reactive([false, false, false])
        const cards = ref([])

        onMounted(() => {
            lucide.createIcons()
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = cards.value.indexOf(entry.target)
                            if (index !== -1) isVisible[index] = true
                        }
                    })
                },
                { threshold: 0.1 }
            )
            cards.value.forEach((card) => observer.observe(card))
        })

        return () => h('div', { id: 'app1' }, [

            // Header
            h('div', {
                class: 'bg-sky-400 text-white max-w-6xl mx-auto px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 rounded-b-xl'
            }, [
                h('div', { class: 'flex items-center gap-6' }, [
                    h('div', {
                        class: 'bg-white text-sky-500 text-4xl lg:text-4xl w-40 h-40 rounded-full flex items-center justify-center shadow'
                    }, name),
                    h('div', { class: 'text-3xl font-bold hidden lg:block text-white' }, englishName)
                ]),
                h('div', { class: 'text-white text-lg space-y-2' }, [
                    h('div', { class: 'flex items-center gap-2' }, [
                        h('i', { 'data-lucide': 'mail', class: 'w-5 h-5' }),
                        'max.hongliren@gmail.com'
                    ])
                ])
            ]),

            // Body content
            h('div', { class: 'max-w-6xl mx-auto p-6 lg:p-10 space-y-12' }, [

                // 簡歷
                h('section', {}, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '簡歷'),
                    h('hr', { class: 'mb-4 border-gray-300' }),
                    h('p', { class: 'text-gray-600 leading-loose text-lg space-y-2' }, [
                        '具備近八年軟體開發經驗，早期以 PHP 搭配 Magento 與 Laravel 為主，參與大型電商平台與 ERP 系統開發，後期專注於前端工程，熟悉 Vue 3、Nuxt 3、Tailwind CSS 與 Pinia 等現代前端技術。', h('br'), h('br'),
                        '實務專案涵蓋物流標籤系統、自動化倉儲工具、ERP 訂單管理平台與 AI 問答系統，具備從畫面開發、元件設計、狀態管理到與 API 串接、部署上線的完整經驗。', h('br'), h('br'),
                        '熟悉前後端整合，能有效與 UI/UX、後端團隊協作，產出高品質、可維護性高的前端應用。', h('br'), h('br'),
                        '目前期望持續深耕於前端開發領域，協助團隊打造更穩定、高效的產品體驗。'
                    ])
                ]),

                // 專案與作品集
                h('section', {}, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '專案與作品集'),
                    h('hr', { class: 'mb-6 border-gray-300' }),
                    h('div', { class: 'grid lg:grid-cols-3 gap-6' },
                        demos.map((item, index) =>
                            h('div', {
                                key: index,
                                class: `bg-white shadow-md rounded-xl overflow-hidden border transition-all duration-300 card-hover fade-in ${isVisible[index] ? 'visible' : ''}`,
                                ref: (el) => { cards.value[index] = el }
                            }, [
                                h('div', {
                                    class: 'relative aspect-[4/3] bg-gray-100 image-hover-container'
                                }, [
                                    h('img', {
                                        src: item.img1,
                                        alt: `demo${index + 1}`,
                                        class: `absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${item.hover ? 'opacity-0' : ''}`
                                    }),
                                    h('img', {
                                        src: item.img2,
                                        alt: `demo${index + 1}-hover`,
                                        class: `absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${!item.hover ? 'opacity-0' : ''}`
                                    }),
                                    h('a', {
                                        href: item.a,
                                        target: '_blank',
                                        class: 'absolute inset-0',
                                        onMouseover: () => item.hover = true,
                                        onMouseleave: () => item.hover = false
                                    })
                                ]),
                                h('div', { class: 'p-4 text-gray-700 text-sm leading-relaxed' }, item.description)
                            ])
                        )
                    )
                ]),

                // 技能
                h('section', {}, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '專業技能'),
                    h('hr', { class: 'mb-4 border-gray-300' }),
                    h('div', { class: 'grid grid-cols-2 md:grid-cols-3 gap-y-4 text-lg text-gray-700' },
                        skill.value.map((s, i) =>
                            h('div', { key: i }, `✔ ${s}`)
                        )
                    )
                ]),

                //工具
                h('section', {}, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '相關工具'),
                    h('hr', { class: 'mb-4 border-gray-300' }),
                    h('div', { class: 'grid grid-cols-2 md:grid-cols-3 gap-y-4 text-lg text-gray-700' },
                        tool.value.map((s, i) =>
                            h('div', { key: i }, `✔ ${s}`)
                        )
                    )
                ])

            ])
        ])
    }
})
createApp(HomePage).mount('#app')