/*
Last Modified: 2025-07-06 12:30
Contact Us: https://www.maxim.pe.kr
© 2025 Maxim. All Rights Reserved.
*/
const languages = {
    _default: {
        // --- Meta & Common Information ---
        'logo_text': 'ANDAR',
        'home_subtitle': 'A time to meet your true self in the breath of nature',
        'site_title': 'ANDAR - Aroma & Spa',
        'rep_name': 'Chloe Kim',
        'email_address': 'andar@andar.kr',
        'email_href': 'mailto:andar@andar.kr',
        'address_text': '456 North Camden Drive, Beverly Hills, CA 90210, USA',
        
        // --- Section Titles & Descriptions ---
        'overview_desc': 'Beyond a simple spa, ANDAR is a premium wellness space that combines the pure energy of nature with aromatherapy to restore balance to your body and mind.',
        'overview_01_title': 'Organic Essential Oils',
        'overview_01_desc': 'Using only the finest organic essential oils from pristine regions, we deliver the pure healing power of nature.',
        'overview_02_title': '1-on-1 Customized Therapy',
        'overview_02_desc': 'Our expert therapists design delicate care, recommending optimal treatments and oils for your specific condition.',
        
        'services_desc': 'Experience perfect rejuvenation through our special programs that embody the philosophy of ANDAR.',
        'services_01_title': 'Aroma Signature',
        'services_01_desc': 'A basic care combining our signature oils and gentle massage to deeply calm your body and mind.',
        'services_01_detail_01': 'Procedure: Gentle Swedish massage',
        'services_01_detail_02': 'Oils: Lavender, Chamomile, Bergamot blend',
        'services_01_detail_03': 'Benefits: Mind-body relaxation, stress relief',
        'services_01_price_1_label': '60 min', 'services_01_price_2_label': '90 min',
        'services_01_price_1_value': '$120', 'services_01_price_2_value': '$170',

        'services_02_title': 'Deep Tissue Relaxation',
        'services_02_desc': 'An intensive care program for relieving chronic muscle tension and restoring the body\'s vitality.',
        'services_02_detail_01': 'Procedure: Deep tissue massage for fascia release',
        'services_02_detail_02': 'Oils: Eucalyptus, Peppermint, Rosemary blend',
        'services_02_detail_03': 'Benefits: Muscle pain relief, vitality boost',
        'services_02_price_1_label': '60 min', 'services_02_price_2_label': '90 min',
        'services_02_price_1_value': '$140', 'services_02_price_2_value': '$190',

        'services_03_title': 'Serenity Facial',
        'services_03_desc': 'A special facial care using botanical ingredients to awaken the skin\'s natural, radiant glow.',
        'services_03_detail_01': 'Procedure: Lymphatic drainage facial massage',
        'services_03_detail_02': 'Oils: Organic Rosehip, Aloe Vera Oil',
        'services_03_detail_03': 'Benefits: Improved skin tone, hydration, and soothing',
        'services_03_price_1_label': '70 min', 'services_03_price_2_label': '100 min',
        'services_03_price_1_value': '$150', 'services_03_price_2_value': '$210',

        'services_faq_item_01_q': 'Can two people receive treatment together?',
        'services_faq_item_01_a': 'Yes, we have a couple\'s room where you can comfortably receive treatments together.',
        'services_faq_item_02_q': 'Is it available for pregnant women?',
        'services_faq_item_02_a': 'Yes, we have a \'Mother-to-Be\' program for expectant mothers.',
        'services_faq_item_03_q': 'Is parking available?',
        'services_faq_item_03_a': 'Yes, we offer free parking in the building.',

        'products_desc': 'Discover our carefully selected aroma products to continue your spa experience in your daily life.',
        'products_01_title': 'Lavender Bliss Oil',
        'products_01_desc': 'The comforting scent of lavender helps promote sleep and relieve stress.',
        'products_01_detail_01': 'Key Ingredients: Organic Lavender Oil, Jojoba Oil',
        'products_01_detail_02': 'How to Use: Apply lightly to wrists or behind ears before sleep.',
        'products_01_detail_03': 'Features: No artificial fragrances, paraben-free',
        'products_01_price_1_label': '50ml', 'products_01_price_2_label': '100ml',
        'products_01_price_1_value': '$45', 'products_01_price_2_value': '$75',

        'products_02_title': 'Eucalyptus Salt Scrub',
        'products_02_desc': 'Refreshing eucalyptus and mineral salts leave your skin soft and smooth.',
        'products_02_detail_01': 'Key Ingredients: Dead Sea Salt, Eucalyptus Oil',
        'products_02_detail_02': 'How to Use: Gently massage on damp skin 1-2 times a week.',
        'products_02_detail_03': 'Features: Exfoliating, purifying',
        'products_02_price_1_label': '150g', 'products_02_price_2_label': '300g',
        'products_02_price_1_value': '$38', 'products_02_price_2_value': '$65',

        'products_03_title': 'Chamomile Calming Mist',
        'products_03_desc': 'A gentle chamomile mist that soothes sensitive skin and provides hydration.',
        'products_03_detail_01': 'Key Ingredients: Chamomile Flower Water, Centella Asiatica Extract',
        'products_03_detail_02': 'How to Use: Spray frequently when skin feels dry or needs soothing.',
        'products_03_detail_03': 'Features: Alcohol-free, suitable for all skin types',
        'products_03_price_1_label': '100ml', 'products_03_price_2_label': '250ml',
        'products_03_price_1_value': '$32', 'products_03_price_2_value': '$55',
        
        'products_faq_item_01_q': 'What is the shelf life of the oil?',
        'products_faq_item_01_a': 'We recommend using it within 12 months of opening.',
        'products_faq_item_02_q': 'Can I purchase products online?',
        'products_faq_item_02_a': 'Yes, we are currently preparing to launch our online store.',

        'promotion_01_title': 'First Visit & Friend Referral',
        'promotion_01_desc': 'We offer our gratitude with special benefits for our first-time visitors and for recommending us.',
        'promotion_01_benefit_01': '15% off all programs on your first visit',
        'promotion_01_benefit_02': 'Both get 10% off when a friend you referred visits',
        'promotion_01_benefit_03': 'Receive an organic oil sample for referrals',
        
        'interview_01_title': 'Sarah <span class="review-from">News Anchor</span>',
        'interview_02_title': 'Emily <span class="review-from">Sommelier</span>',
        'interview_01_script': '"My daily news anchoring often left me with a tense neck and shoulders. Andar\'s aroma therapy was more than just a massage; it brought deep tranquility to my body and mind. The personalized oil blend felt like my own private sanctuary. Incorporating Andar visits into my demanding broadcast schedule has become an essential part of my routine. If you\'re seeking true relaxation in your busy life, I wholeheartedly recommend Andar for a profound sense of peace and renewal."',
        'interview_02_script': '"As a sommelier, discerning subtle aromas is my life\'s work. Yet, long hours of intense focus can be utterly exhausting. Andar\'s deep tissue massage meticulously eased my tense muscles, and the natural fragrances provided a profound sense of peace, as if I were immersed in a serene forest. The therapist\'s expert touch seemed to understand my body\'s subtle signals even before I did. Just as I select the finest wines, Andar delivered perfect rejuvenation with their exceptional service. For those who appreciate true sensory experiences, Andar\'s wellness offers an unparalleled choice for rejuvenation."',
    },
    ko: {
        'logo_text': '안다르',
        'home_subtitle': '자연의 숨결 속, 진정한 나를 만나는 시간',
        'site_title': 'ANDAR - 아로마 & 스파',
        
        'overview_desc': '안다르는 자연의 순수함으로 몸과 마음의 균형을 되찾아주는 웰니스 공간입니다.',
        'overview_01_title': '유기농 에센셜 오일',
        'overview_01_desc': '청정 지역에서 공급받은 최상급 유기농 에센셜 오일만을 사용하여 자연 그대로의 치유력을 선사합니다.',
        'overview_02_title': '1:1 맞춤형 테라피',
        'overview_02_desc': '전문 테라피스트가 당신의 컨디션에 맞춰 최적의 트리트먼트와 오일을 추천하고 섬세한 케어를 디자인합니다.',
        
        'services_desc': '안다르의 철학이 담긴 특별한 프로그램을 통해 완벽한 재충전의 시간을 경험하세요.',
        'services_01_title': '아로마 시그니처',
        'services_01_desc': '시그니처 오일과 부드러운 마사지로 심신의 안정을 돕는 안다르의 베이직 케어입니다.',
        'services_01_detail_01': '진행: 부드러운 스웨디시 마사지',
        'services_01_detail_02': '오일: 라벤더, 캐모마일, 베르가못 블렌드',
        'services_01_detail_03': '효과: 심신 안정, 스트레스 완화',
        'services_01_price_1_label': '60분', 'services_01_price_2_label': '90분',
        
        'services_02_title': '딥티슈 릴렉세이션',
        'services_02_desc': '만성적인 근육 긴장을 해소하고 몸의 활력을 되찾아주는 컨디션 집중 케어입니다.',
        'services_02_detail_01': '진행: 근막 이완을 위한 딥티슈 마사지',
        'services_02_detail_02': '오일: 유칼립투스, 페퍼민트, 로즈마리 블렌드',
        'services_02_detail_03': '효과: 근육 통증 완화, 활력 증진',
        'services_02_price_1_label': '60분', 'services_02_price_2_label': '90분',

        'services_03_title': '세레니티 페이셜',
        'services_03_desc': '천연 성분으로 피부의 힘을 깨워 건강한 광채를 선사하는 스페셜 페이셜 케어입니다.',
        'services_03_detail_01': '진행: 림프 순환 페이셜 마사지',
        'services_03_detail_02': '오일: 유기농 로즈힙, 알로에 베라 오일',
        'services_03_detail_03': '효과: 피부톤 개선, 보습 및 진정',
        'services_03_price_1_label': '70분', 'services_03_price_2_label': '100분',
        
        'services_faq_item_01_q': '두 사람이 함께 받을 수 있나요?',
        'services_faq_item_01_a': '네, 커플룸이 마련되어 있어 두 분이 함께 편안하게 관리를 받으실 수 있습니다.',
        'services_faq_item_02_q': '임산부도 이용 가능한가요?',
        'services_faq_item_02_a': '네, 임산부를 위한 \'마더-투-비\' 프로그램이 준비되어 있습니다.',
        'services_faq_item_03_q': '주차 지원이 되나요?',
        'services_faq_item_03_a': '네, 건물 내 주차장을 무료로 지원해 드립니다.',

        'products_desc': '안다르가 엄선한 아로마 제품들을 만나보세요.',
        'products_01_title': '라벤더 블리스 오일',
        'products_01_desc': '편안한 라벤더 향이 숙면과 스트레스 완화에 도움을 줍니다.',
        'products_01_detail_01': '주요성분: 유기농 라벤더, 호호바 오일',
        'products_01_detail_02': '사용법: 잠들기 전, 손목이나 귀 뒤에 가볍게 바르세요.',
        'products_01_detail_03': '특징: 인공 향료, 파라벤 무첨가',
        'products_01_price_1_label': '50ml', 'products_01_price_2_label': '100ml',

        'products_02_title': '유칼립투스 솔트 스크럽',
        'products_02_desc': '상쾌한 유칼립투스 향이 피부를 매끄럽고 부드럽게 정돈합니다.',
        'products_02_detail_01': '주요성분: 사해 소금, 유칼립투스 오일',
        'products_02_detail_02': '사용법: 주 1-2회, 물기가 있는 상태에서 부드럽게 마사지',
        'products_02_detail_03': '특징: 각질 제거, 피부 정화',
        'products_02_price_1_label': '150g', 'products_02_price_2_label': '300g',

        'products_03_title': '캐모마일 카밍 미스트',
        'products_03_desc': '순한 캐모마일 성분이 민감한 피부를 진정시키고 수분을 공급합니다.',
        'products_03_detail_01': '주요성분: 캐모마일 꽃수, 병풀 추출물',
        'products_03_detail_02': '사용법: 피부가 건조하거나 진정이 필요할 때 수시로 분사',
        'products_03_detail_03': '특징: 알코올 프리, 모든 피부 타입 사용 가능',
        'products_03_price_1_label': '100ml', 'products_03_price_2_label': '250ml',

        'products_faq_item_01_q': '오일의 유통기한은 어떻게 되나요?',
        'products_faq_item_01_a': '개봉 후 12개월 이내에 사용하시는 것을 권장합니다.',
        'products_faq_item_02_q': '제품은 온라인으로도 구매할 수 있나요?',
        'products_faq_item_02_a': '네, 현재 온라인 스토어 오픈을 준비 중입니다.',

        'promotion_01_title': '첫 방문 & 친구 추천',
        'promotion_01_desc': '첫 방문 고객님과 소중한 분을 추천해주신 고객님께 감사의 마음을 담아 혜택을 드립니다.',
        'promotion_01_benefit_01': '첫 방문 시, 모든 프로그램 15% 할인',
        'promotion_01_benefit_02': '친구 추천 시, 추천인과 친구 모두 10% 추가 할인',
        'promotion_01_benefit_03': '추천으로 등록 시, 유기농 오일 샘플 증정',
        
        'interview_01_script': '"매일 뉴스를 진행하며 긴장된 목과 어깨는 저의 고질병이었죠. 안다르의 아로마 테라피는 단순한 마사지를 넘어, 몸과 마음에 깊은 평온을 선사했습니다. 저에게 맞춰 블렌딩된 오일 향은 마치 저만을 위한 휴식처 같았어요. 바쁜 방송 스케줄 속 안다르 방문은 이제 저의 필수 루틴입니다. 지친 일상 속 진정한 쉼을 찾는다면, 안다르를 강력히 추천합니다."',
        'interview_02_script': '"와인 소믈리에로서 섬세한 향을 감별하는 일은 저의 삶이죠. 하지만 긴 시간 집중하는 일은 몸을 지치게 합니다. 안다르의 딥티슈 마사지는 뭉친 근육을 섬세하게 풀어주었고, 자연의 향기는 깊은 평온을 선사했어요. 테라피스트의 전문적인 손길은 제 몸의 미세한 신호까지 읽어주는 듯했습니다. 최고의 와인을 선별하듯, 안다르는 최고의 서비스로 저에게 완벽한 재충전을 선물했습니다. 섬세한 감각을 지닌 당신께, 안다르의 웰니스는 최고의 선택이 될 겁니다."',
    }
};
