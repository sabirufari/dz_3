import React, { useState } from 'react'
import Item from './Item'
import Poisk from './Poisk'

function Goods() {
    const list = [
        {name:'Стул',praice:'55 $',url:'https://vobox.ru/upload/resize_cache/webp/upload/medialibrary/c4b/foto_4_samye_udobnye_stulya_dlya_kuhni.webp'},
        {name:'Стул',praice:'55 $',url:'https://vobox.ru/upload/iblock/076/modnye_stulya_dlya_kukhni_2021_2022-_3_.jpg'},
        {name:'Стул',praice:'55 $',url:'https://cornas.ru/wp-content/uploads/2018/07/stulya-v-interere-kuhni-foto-1.jpg'},
        {name:'Стол',praice:'80 $',url:'https://www.tabilga.kg/wp-content/uploads/2022/10/%D0%A1%D1%82%D0%BE%D0%BB-%D1%81%D0%BE-%D1%81%D1%82%D1%83%D0%BB%D1%8C%D1%8F%D0%BC%D0%B8-%D0%9B%D1%83%D0%BD%D0%B0%D1%80%D0%B0-1.jpg'}
    ]
    const [products,setProducts]=useState(list)

  return (
    <>
    
    <div className='wrape'>
            {products!==''? products?.map((item,i)=><Item  key={i} good={item} />):setProducts(list)}
    </div>
    </>

  )
}

export default Goods