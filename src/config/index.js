import { IconMemo, IconChallenge, IconInfo, IconDinner, IconSnack } from "../components/icons";

const NavMenus = [
    {
        to: '/',
        icon: <IconMemo />,
        text: '自分の記録'
    },
    {
        to: '/',
        icon: <IconChallenge />,
        text: 'チャレンジ'
    },
    {
        to: '/',
        icon: <IconInfo />,
        text: 'お知らせ'
    },
];

const expandMenus = [
    {
        to: '/',
        text: '自分の記録'
    },
    {
        to: '/',
        text: '体重グラフ'
    },
    {
        to: '/',
        text: '目標'
    },
    {
        to: '/',
        text: '選択中のコース'
    },
    {
        to: '/',
        text: 'コラム一覧'
    },
    {
        to: '/',
        text: '設定'
    },
];

const foodCategories = [
    {
        icon: <IconDinner />,
        text: 'Morning',
        to: '/'
    },
    {
        icon: <IconDinner />,
        text: 'Lunch',
        to: '/'
    },
    {
        icon: <IconDinner />,
        text: 'Dinner',
        to: '/'
    },
    {
        icon: <IconSnack />,
        text: 'Snack',
        to: '/'
    },
];

const foodItems = [
    {
        text: '05.21.Morning',
        image: '/images/food_image_1.png',
        to: '/'
    },
    {
        text: '05.21.Lunch',
        image: '/images/food_image_2.png',
        to: '/'
    },
    {
        text: '05.21.Dinner',
        image: '/images/food_image_3.png',
        to: '/'
    },
    {
        text: '05.21.Snack',
        image: '/images/food_image_4.png',
        to: '/'
    },
    {
        text: '05.21.Morning',
        image: '/images/food_image_1.png',
        to: '/'
    },
    {
        text: '05.21.Lunch',
        image: '/images/food_image_2.png',
        to: '/'
    },
    {
        text: '05.21.Dinner',
        image: '/images/food_image_3.png',
        to: '/'
    },
    {
        text: '05.21.Snack',
        image: '/images/food_image_4.png',
        to: '/'
    },
];

export { NavMenus, expandMenus, foodCategories, foodItems };
