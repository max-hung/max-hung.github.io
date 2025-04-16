import { createApp, h, reactive, ref, onMounted, defineComponent, nextTick } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
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
                loaded: false,
                a: 'https://max-hung.github.io/demo-1/#/login',
                description: '透過 API 整合物流與訂單數據，自動轉換格式 (如 CSV、XLS)，支援倉儲與標籤流程。'
            },
            {
                img1: '/img/demo2-1.png',
                img2: '/img/demo2-2.png',
                hover: false,
                loaded: false,
                a: 'https://max-hung.github.io/demo-2',
                description: 'ERP 系統整合多平台 API，自動化訂單與物流處理，提升內部作業效率。'
            },
            {
                img1: '/img/demo3-1.png',
                img2: '/img/demo3-2.png',
                hover: false,
                loaded: false,
                a: 'https://max-hung.github.io/demo-3',
                description: '內部 AI 問答平台，提升新人培訓效率與知識即時查詢能力。'
            }
        ])

        const skill = ref([
            { name: 'Vue 3 / Vue2' },
            { name: 'Nuxt 3' },
            { name: 'SCSS' },
            { name: 'Tailwind CSS' },
            { name: 'TypeScript' },
            { name: 'Pinia / Vuex' },
            { name: 'RESTful API 整合' },
            { name: 'CoreUI', url: 'https://coreui.io/' },
            { name: 'Git' },
            { name: 'CI/CD 部署' },
            { name: '網站部署 GCP VM 架設' },
            { name: 'CircleCI', url: 'https://circleci.com/' },
            { name: 'PHP' },
            { name: 'Magento', url: 'https://github.com/magento/magento2' },
            { name: 'GCP CDN' },
            { name: 'Laravel' },
            { name: 'Google Cloud Platform' },
            { name: 'Google Tag Manager' },
            { name: 'Cloudflare DNS 設定' },
            { name: 'Terraform', url: 'https://www.terraform.io/' }
        ])

        const tool = ref(['Trello', 'Jira', 'Postman'])
        const isVisible = reactive([false, false, false])
        const cards = ref([])
        const showScrollTop = ref(false)
        const scrollIconRef = ref(null)

        onMounted(() => {
            lucide.createIcons()

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const index = cards.value.indexOf(entry.target)
                    if (entry.isIntersecting && index !== -1) {
                        isVisible[index] = true
                    }
                })
            }, { threshold: 0.1 })
            cards.value.forEach(card => observer.observe(card))

            // 監聽滾動事件
            window.addEventListener('scroll', async () => {
                const shouldShow = window.scrollY > 100
                if (shouldShow !== showScrollTop.value) {
                    showScrollTop.value = shouldShow
                    await nextTick()
                    lucide.createIcons() // 確保 icon 會渲染
                }
            })
        })
        return () => h('div', null, [

            // Header
            h('div', {
                class: 'bg-gradient-to-r from-blue-800 to-blue-400 text-white max-w-6xl mx-auto px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:rounded-b-3xl shadow-lg transition-all duration-500',
            }, [
                h('div', {
                    class: `
                    relative w-36 h-36 lg:w-40 lg:h-40 perspective-1000 
                    hover-flip-container
                  `
                }, [
                    h('div', {
                        class: `
                      relative w-full h-full rounded-full transition-transform duration-700 transform-style-3d flip-card-inner
                    `,
                    }, [
                        // 正面內容
                        h('div', {
                            class: `
                        absolute inset-0 bg-gradient-to-br from-white to-slate-100 text-blue-600 text-5xl rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/50 backdrop-blur-sm
                        backface-hidden
                      `,
                        }, name),

                        // 背面內容
                        h('div', {
                            class: `
                        absolute inset-0 bg-gradient-to-br from-white to-slate-100 text-blue-600 text-5xl rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/50 backdrop-blur-sm
                        rotate-y-180 backface-hidden
                      `,
                        }, englishName),
                    ]),
                ]),
                h('div', { class: 'text-white text-lg space-y-3 lg:text-right' }, [
                    h('div', {
                        class: 'flex items-center gap-3 hover:text-white/90 transition-colors duration-300',
                    }, [
                        h('i', { 'data-lucide': 'mail', class: 'w-5 h-5' }),
                        'max.hongliren@gmail.com',
                    ]),
                ]),
            ]),


            // Body content
            h('div', { class: 'max-w-6xl mx-auto p-6 lg:p-10 space-y-12' }, [
                // Resume
                h('section', { class: 'fade-in visible' }, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '簡歷'),
                    h('hr', { class: 'mb-4 border-gray-300' }),
                    h('p', { class: 'text-gray-600 leading-loose text-lg space-y-2' }, [
                        '具備近八年軟體開發經驗，專注於前端工程領域，熟悉 Vue 3、Nuxt 3、Tailwind CSS、Pinia 等現代前端技術，具備模組化開發思維與良好工程實踐，致力於打造穩定、高效、易於維護的前端應用。', h('br'), h('br'),
                        '曾參與多項實務專案，包括物流標籤系統、自動化倉儲工具、ERP 訂單管理平台及 AI 問答系統，負責從畫面切版、元件設計、狀態管理到 API 串接與部署上線，具備獨立開發與跨部門協作的完整經驗。', h('br'), h('br'),
                        '擅長與 UI/UX 設計師密切合作，重視使用者體驗與設計細節，並能與後端團隊高效整合，推進產品快速迭代與穩定上線。熟悉 Git 版本控制、CI/CD 流程與基本部署，具備良好的問題解決能力與自我學習能力。', h('br'), h('br'),
                        '目前期望加入一個技術導向、重視產品品質的團隊，持續精進前端技術，貢獻自身經驗，協助打造具有競爭力的 Web 應用與使用體驗。'
                    ])
                ]),
                // Portfolio
                h('section', {}, [
                    h('h2', { class: 'text-3xl font-bold mb-2 fade-in visible' }, '專案與作品集'),
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
                                        class: `absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${item.hover ? 'opacity-0' : 'opacity-100'}`,
                                        onLoad: () => item.loaded = true
                                    }),
                                    h('img', {
                                        src: item.img2,
                                        alt: `demo${index + 1}-hover`,
                                        class: `absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${!item.hover ? 'opacity-0' : 'opacity-100'}`
                                    }),
                                    !item.loaded && h('div', { class: 'skeleton' }),
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
                h('section', { class: 'fade-in visible' }, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '專業技能'),
                    h('hr', { class: 'mb-4 border-gray-300' }),
                    h(
                        'div',
                        { class: 'grid grid-cols-2 md:grid-cols-3 gap-y-4 text-lg text-gray-700' },
                        skill.value.map((s, i) =>
                            h(
                                'div',
                                { key: i, class: 'text-item' },
                                s.url
                                    ? h(
                                        'a',
                                        { href: s.url, target: '_blank', class: 'text-blue-600 hover:underline' },
                                        `✔ ${s.name}`
                                    )
                                    : `✔ ${s.name}`
                            )
                        )
                    )
                ]),
                // 工具
                h('section', { class: 'fade-in visible' }, [
                    h('h2', { class: 'text-3xl font-bold mb-2' }, '相關工具'),
                    h('hr', { class: 'mb-4 border-gray-300' }),
                    h('div', { class: 'grid grid-cols-2 md:grid-cols-3 gap-y-4 text-lg text-gray-700' },
                        tool.value.map((s, i) =>
                            h('div', { key: i, class: 'text-item' }, `✔ ${s}`)
                        )
                    )
                ])
            ]),
            // Scroll to top button
            h('button', {
                class: `fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 
                  transition-opacity duration-500 ${showScrollTop.value ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
            }, h('i', {
                'data-lucide': 'arrow-up',
                class: 'w-5 h-5',
                ref: scrollIconRef
            }))

        ])
    }
})

createApp(HomePage).mount('#app')
