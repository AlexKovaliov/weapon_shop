import rossi from '../../../img/products/rifles/rossi.png'
import core from '../../../img/products/rifles/core.png'
import colt from '../../../img/products/rifles/colt.png'
import arsenal from '../../../img/products/rifles/arsenal.png'
import smith from '../../../img/products/rifles/smith.png'
import savage from '../../../img/products/rifles/savage.png'
import pof from '../../../img/products/rifles/pof.png'
import ruger from '../../../img/products/rifles/ruger.png'
import { v1 } from 'uuid'


export type RiflesDataType = {
    id: string
    title: string
    description: string
    img: string
    caliber: string
    classification: string
    price: string
} []

export const riflesStore: RiflesDataType = [
    {
        id: v1(),
        title: "Rossi RL22, Lever Action, 22 LR, 18\" Barrel, Blued, Synthetic Stock, Adjustable Sights, 15Rd",
        description: "The Rossi Rio Bravo is based on the company’s popular line of R92 lever-action firearms. Featuring a rich German beechwood or rugged black polymer forearm and stock with polished black metal finish, the Rio Bravo brings the traditional rifle experience to the rimfire category. The Rio Bravo is well-suited for small-game hunting, adventurous target shooting, around-the-farm pest control, and can be used for youth training.",
        img: rossi,
        caliber: "22 Long Rifle",
        classification: 'Firearm',
        price: '$291.09'
    },
    {
        id: v1(),
        title: "Core 15 Scout M-Lok AR-15 .223/5.56, 16\" Barrel, 15\" M-Lok, Nitride BCG, 30rd Mag",
        description: "Built upon the same principles as Eugene Stoner's original design, we use the basic receivers as the CORE of our AR-15 style rifles, and then expand upon that design by incorporating the many benefits of today's accessories into our rifles. We hold each and every receiver to exacting tolerances using state of the art machining processes.\n" +
            "\n" +
            "By exceeding military standards, Core 15 ensures the best fit possible and can offer a more reliable, smoother functioning, and more accurate weapon that will provide you with the peace of mind that you deserve. Whether a weekend shooter heading to the range for an afternoon of fun, or professional operator preparing for work, CORE15 Rifle Systems will provide you with the weapon to fit your individual needs.",
        img: core,
        caliber: "223 Remington 5.56x45mm",
        classification: 'Firearm',
        price: '$899.99'
    },
    {
        id: v1(),
        title: "Colt CR6920 AR-15 Carbine 223/5.56, 16\" Barrel, Magpul MBUS Rear Sight, 30rd Mag",
        description: "Colt's reliability, performance, and accuracy provide our Armed Forces the confidence required to accomplish any mission. Colt's LE6920 series carbines share many features with their combat-proven brother, the Colt M4. It utilizes a chrome-lined barrel, an adjustable-post front sight with rear Magpul Gen2 Back-Up Sight (MBUS), and a 30-round Magpul PMAG. This model has no carry handle.",
        img: colt,
        caliber: "223 Remington 5.56x45mm",
        classification: 'Firearm',
        price: '$1,322.59'
    },
    {
        id: v1(),
        title: "Arsenal AK47 SAM7SF 7.62x39mm, 16\" Barrel, Milled Receiver, Folder, Black, 5 rd Mag",
        description: "Arsenal, Inc., the premier AMerican importer and manufacturer of semi-auto rifles, is proud to offer to AMerican shooters the Bulgarian-made SAM7SF. This 7.62x39 caliber rifle combines authentic, high-quality features rarely seen in the American market. From its unique right-side folding tubular butstock to its 24x1.5mm muzzle threads with muzzle brake, every component of the SAM7SF is engineered to provide decades of dependalbe and accurate service. The SAM7SF rifle is bound to become a sought-after shooter and collectible firearm.",
        img: arsenal,
        caliber: "7.62x39",
        classification: 'Firearm',
        price: '$2,199.00'
    },
    {
        id: v1(),
        title: "Smith & Wesson M&P 15 Sport 2 Optic Ready AR-15 5.56 16\" Barrel Black 30rd Mag",
        description: "Model M&P 15 Sport 2 OR Optic Ready 5.56mm 16 Inch Threaded Barrel Matte Black Finish 30 Round\n" +
            "\n" +
            "Detachable magazine. Threaded sixteen inch Armornite coated barrel. 7075 Aluminum receiver. 4140 Steel barrel material. Polymer grip. 6-position adjustable stock. Gas block with integral pictinny-style rail. QD sling swivel attachment point. Chromed firing pin. Forged, integral trigger guard. Foward assist and dust cover. 1 in 9 inch twist. Matte black finish.",
        img: smith,
        caliber: "223 Remington 5.56x45mm",
        classification: 'Firearm',
        price: '$999.99'
    },
    {
        id: v1(),
        title: "Savage AXIS XP 6.5 Creedmoor, WEAVER 3-9x40 Scope Mounted",
        description: "Savage Arms Axis bolt-action centerfire rifle blends unflinching\n" +
            "performance and impressive accuracy. It sports a modern design that\n" +
            "features sleek contours, recoil pad vents and a textured, easy-to-control\n" +
            "grip. The Axis also features a carbon-steel barrel, a black synthetic\n" +
            "stock, a drilled and tapped receiver, and offers silky-smooth bolt\n" +
            "operation.\n" +
            "This 6.5 Creedmoor model has a matte blued 22\" barrel and\n" +
            "includes a mounted and boresighted 3-9x40mm Weaver scope.",
        img: savage,
        caliber: "6.5 Creedmoor",
        classification: 'Firearm',
        price: '$382.09'
    },
    {
        id: v1(),
        title: "POF RENEGADE + PLUS AR-15 5.56/223 16\" Puritan Barrel M-LOK Adjustable Stock 30rd Mag",
        description: "What really sets the Renegade + apart is the Gen 4 POF-USA billet lower receiver and POF-USA Ultimate Bolt Carrier Group. This receiver is completely ambidextrous and includes our flat 3.5lb match grade trigger with KNS Precision anti-walk pins – match ready right out of the box. The magic in the upper receiver is held within our Ultimate Bolt Carrier Group. NP3 coated for maximum protection & reliability, integrated gas key (no screws required) and the POF-USA Roller Cam Pin upgrade installed from the factory.",
        img: pof,
        caliber: "223 Remington 5.56x45mm",
        classification: 'Firearm',
        price: '$1,999.99'
    },
    {
        id: v1(),
        title: "Ruger American 6.5mm Creedmoor 22\" Threaded Barrel Bronze Finish Composite Go Wild I-M Brush Camo 3rd",
        description: "Lightweight composite stock with modern forend contouring and serrations. Ruger Marksman adjustable trigger from 3-5 pounds pull. Soft rubber recoil pad. Three-lug 70 degree bolt utilizes full diameter bolt body and dual cocking cams. Power Bedding integral block bedding system. Cold hammer-forged, Heavier tapered, threaded barrel with Cerakote Bronze finish. Tang safety. Soft rubber buttpad. Factory-installed one-piece aluminum scope rail. Sling swivel studs. AI-style magazine. Go Wild I-M Brush Camouflage stock/forearm finish.",
        img: ruger,
        caliber: "6.5 Creedmoor",
        classification: 'Firearm',
        price: '$599.89'
    }
]