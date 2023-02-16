import React from 'react'
import Item from "../ItemListContainer/Item";

export default function MaterialApoyo() {
  return (
    <div>
    <Item img= "/imgs/Captura.jpg" title= "Stumpjumper" price= {500} detail= "Expert pro"/>
    <Item img= "/imgs/Captura1.jpg" title= "Enduro" price= {800} detail= "Expert pro"/>
    <Item img= "/imgs/Captura2.jpg" title= "Turbo Levo" price= {600} detail= "Expert pro"/>
    </div>
  )
}


<BrowserRouter>
<Routes>
  <Route path="/" element={ <ItemListContainer /> } />
  <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
  <Route path="/category/:categoryid" element={<ItemListContainer />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</BrowserRouter>