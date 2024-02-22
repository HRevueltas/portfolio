import { ItemGrid } from "./ItemGrid"
// import { ItemCenter } from "./ItemCenter"
import { items } from "./helpers/itemContent"
// import { ItemCenter } from "./items/itemCenter"

export const ContentGrid = () => {

    return (
        <>
            <div className="contentGrid">

                {
                    items.map(item => (

                        <ItemGrid  
                        key={item.id}
                        id={item.id} 
                        type={item.type} 
                        backgroundColor={item.backgroundColor} 
                        description={item.description} 
                        gridColumn={item.gridColumn} 
                        gridRow={item.gridRow} 
                        title={item.title} 
                        url={item.imageUrl}
                        />
                    ))
                }

                {/* {numberItem.map(item => (
                    <ItemGrid key={item} index={item} />
                 ))} */}
                {/* <ItemGrid />
                <ItemGrid />
                <ItemGrid />
                <ItemGrid />
                <ItemGrid />
                <ItemGrid />
                <ItemGrid />
                <ItemGrid /> */}
                {/* <ItemCenter/> */}
                {/* <ItemGrid /> */}
                {/* <ItemGrid /> */}
            </div>
        </>
    )
}
