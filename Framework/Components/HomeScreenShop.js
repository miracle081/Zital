import { StyleSheet, Text, View, Image } from 'react-native';
import { homeShopImages, theme } from './Data';

export function HomeScreenShop() {

    const displayProducts = function () {
        return homeShopImages.map((item) => {
            return (
                <View style={[styles.shopItem, styles.shopItemShadow]} key={item.id}>
                    <Image source={item.source()} style={{ width: "100%", height: '100%', borderRadius: 10 }} />
                </View>
            )
        })
    }
    return (
        <View style={styles.container}>
            <Text style={{ marginLeft: 10, fontFamily: theme.fontName.text600[0], fontSize: 17 }}>Shop</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
                {displayProducts()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        marginTop: 10,
        paddingTop: 10,
        gap: 17,
        marginBottom: 20
    },
    shopItem: {
        width: '45%',
        height: 200,
    },
    shopItemShadow: theme.productShadow()
})