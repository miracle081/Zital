import { TouchableOpacity } from 'react-native'
import {
    Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium,
    Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold, Poppins_700Bold_Italic
} from '@expo-google-fonts/poppins';

const carouselItems = [
    { id: 1, source() { return { uri: 'https://images.unsplash.com/photo-1525825691042-e14d9042fc70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpcnBvZHxlbnwwfHwwfHx8MA%3D%3D' } } },
    { id: 2, source() { return { uri: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjB3ZWFyc3xlbnwwfHwwfHx8MA%3D%3D' } } },
    { id: 3, source() { return { uri: 'https://images.unsplash.com/photo-1639736922209-793b59a41572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdyaXN0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D' } } },
    { id: 4, source() { return { uri: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600' } } },
]
const trendingDeals = [
    { id: 1, source() { return { uri: 'https://m.media-amazon.com/images/I/61Nn7FcOqBL._AC_UL480_FMwebp_QL65_.jpg' } }, discount: "-45%", cost: "20,000.25" },
    { id: 2, source() { return { uri: 'https://m.media-amazon.com/images/I/81dXK77b5HL._AC_UL480_FMwebp_QL65_.jpg' } }, discount: "-15%", cost: "1,500.78" },
    { id: 3, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } }, discount: "-72%", cost: "478,997.74" },
    { id: 4, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } }, discount: "-20%", cost: "1,030,000.15" },
    { id: 5, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } }, discount: "-56%", cost: "756.25" },
    { id: 6, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } }, discount: "-13%", cost: "8,000.89" },
    { id: 7, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } }, discount: "-19%", cost: "4,700.45" },
]

const homeShopImages = [
    { id: 1, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 2, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 3, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 4, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 5, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 6, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 7, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 8, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 9, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 10, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 11, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 12, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 13, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
    { id: 14, source() { return { uri: 'https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg' } } },
];

const theme = {
    colors: {
        introBg: "white",
        introShadowProps: () => {
            return {
                shadowColor: "rgb(36, 36, 36)",
                shadowOffset: { width: 2, height: 5 },
                shadowOpacity: 0.4,
                shadowRadius: 30,
                elevation: 5,
            };
        },
        primary1: '#c01185',
        profileIcons: 'black'
    },
    fontName: {
        text400: ['Poppins_400Regular', 'Poppins_400Regular_Italic'],
        text500: ['Poppins_500Medium', 'Poppins_500Medium_Italic'],
        text600: ['Poppins_600SemiBold', 'Poppins_600SemiBold_Italic'],
        text700: ['Poppins_700Bold', 'Poppins_700Bold_Italic'],
    },
    productShadow: () => {
        return {
            shadowColor: 'rgb(137, 137, 137)',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.45,
            shadowRadius: 15,
            elevation: 5
        }
    }
};

function NavigateButton(props) {
    return (
        <TouchableOpacity style={props.style} activeOpacity={props.activeOpacity} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}

export { trendingDeals, homeShopImages, carouselItems, theme, NavigateButton }