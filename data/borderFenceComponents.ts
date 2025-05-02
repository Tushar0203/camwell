// Border Fence Component Categories and Items
export const borderFenceComponents = {
  "Primary Structure": [
    // Make sure this path matches exactly where the image is stored in your public directory
    { name: "WELD MESH PANEL", imageUrl: "/products/border-fence/weld-mesh-panel.png" },
    { name: "FENCE (CHS) POST", imageUrl: "/products/border-fence/fence-chs.png" },
    { name: "ANCHOR ROD", imageUrl: "/products/border-fence/anchor-rod.png" },
    { name: "STRUT (CHS) POST WITH ACCESSORIES", imageUrl: "/products/border-fence/strut-chs.png" },
  ],
  "Fastening System": [
    { name: "OMEGA CLAMP WITH PROFILE COVER PLATE", imageUrl: "/products/border-fence/omega-clamp.png" },
    { name: "INTERMEDIATE PANEL (IP) BINDER", imageUrl: "/products/border-fence/intermediate-panel-binder.png" },
    { name: "CORNER CLAMP", imageUrl: "/products/border-fence/corner-clamp.png" },
  ],
  "Security Enhancement": [
    { name: "STRAINING Y ARM", imageUrl: "/products/border-fence/straining-y-arm.png" },
    { name: "INTERMEDIATE Y-ARM", imageUrl: "/products/border-fence/intermediate-y-arm.png" },
    { name: "PTCC PUNCHED TAPE CONCERTINA COIL", imageUrl: "/products/border-fence/ptcc-punched.png" },
    { name: "RAZOR WIRE TAPE", imageUrl: "/products/border-fence/razor-wire-tape.png" },
    { name: "HOG RINGS", imageUrl: "/products/border-fence/hog-rings.png" },
  ],
  "Hardware & Accessories": [
    { name: "TIE WIRE FOR RAZOR TAPE", imageUrl: "/products/border-fence/tie-wire.png" },
    { name: "EYE BOLT FOR STRAINING Y-ARM", imageUrl: "/products/border-fence/eye-bolt.png" },
    { name: "M8X120MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x120mm.png" },
    { name: "M8X75MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x75mm.png" },
    { name: "M8X60MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x60mm.png" },
    { name: "M8X35MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x35mm.png" },
  ],
};

// Component specifications data
export const componentSpecifications = {
  "WELD MESH PANEL": {
    description: "Welded mesh panel is produced by electrical resistance welding of galvanized wires and subsequently they are either Dual Polyester powder coated or thermoplastic powder coated depending upon exposure of C4 or C5 environment.",
    specifications: [
      { label: "Panel size", value: "2667 mm × 955 mm (W x H), Tolerance of ± 2%." },
      { label: "Mesh Size", value: "76.2 mm × 3 mm × 12.7 mm × 2 mm (W × H)." },
      { label: "Weld Shear strength", value: "The average weld shear strength of 4 welds taken at random shall not be less than 50% of the breaking strength of the smallest wire (in this case the vertical wire)." },
      { label: "Mesh Wire", value: "Galvanized MS wire conforming to requirements of IS 280-2006 as well as IS:7887. Wire diameter 4.0 mm (± 0.05mm)." },
      { label: "Tensile Strength of wire", value: "Min 550 N/sq.mm." },
      { label: "V-Shape notch", value: "2 nos. per panel of depth 38 mm and width 107 mm and 100° angle." },
      { label: "Overlapping of panels", value: "75 mm overlap in horizontal direction and 167 mm overlap in vertical directions." },
      { label: "Panel weight", value: "24.30Kgs (± 5%)." },
      { label: "Galvanizing of wire", value: "Hot dip galvanized coating, done as per IS:2629, shall have minimum mass of 60/100 GSM, as determined as per IS:6745. The coating shall conform to IS 4826." },
      { label: "Coating", value: "Depending upon the corrosion rating C4 or C5 of the environment, the panels can be coated in two different ways for C4 environment Dual powder coating is recommended and for C5 environment Thermoplastic coating is recommended." },
      { label: "Dual Powder coating", value: "The panels are dual coated with base coat of a primer powder and top coat with polyester powder with thickness of minimum120 μm for C4." },
      { label: "Thermoplastic coating", value: "The panels are thermoplastic powder coated after fabrication on galvanized base with a minimum thickness of 300 μm for C5." },
      { label: "Corrosion Coating Standard", value: "EN 10245-1." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "1200 Pieces, the quantity suggested are based on flat ground." },
    ]
  },
  "FENCE (CHS) POST": {
    description: "Circular Hollow Section posts that provide the main structural support for the fence system.",
    specifications: [
      { label: "Type", value: "Circular Hollow Section, Specification – IS:1161-2014 (Medium Grade, YST – 210MPa/ 240MPa)." },
      { label: "Outer Diameter", value: "76.1 mm ±1%." },
      { label: "Thickness", value: "3.60 mm / 4.0 mm ±10%." },
      { label: "Length", value: "3400 mm ± 2%." },
      { label: "Base coating", value: "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4736." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standards", value: "IS 13871." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "400 Pieces, the quantity suggested are based on flat ground." }
    ]
  },
  "ANCHOR ROD": {
    description: "Anchor rods are used to anchor the fence post in the Concrete using tie wire.",
    specifications: [
      { label: "Material", value: "MS Galvanized round bar." },
      { label: "Diameter", value: "10mm." },
      { label: "Length", value: "250mm / 300mm as per pit size." },
      { label: "Quantity per KM", value: "802 Pieces." }
    ]
  },
  "STRUT (CHS) POST WITH ACCESSORIES": {
    description: "Strut post is used at the starting and the end point of the fencing, this post gives an additional support to the corner fence post.",
    specifications: [
      { label: "Type", value: "Circular Hollow Section, Specification – IS:1161-2014 (Medium Grade, YST – 210MPa/ 240MPa)." },
      { label: "Outer Diameter", value: "76.1 mm ±1%." },
      { label: "Thickness", value: "3.60 mm / 4.0 mm ±10%." },
      { label: "Length", value: "3400 mm ± 2%." },
      { label: "Base coating", value: "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4736." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standards", value: "IS 13871." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "2 Pieces, the quantity suggested are based on flat ground." }
    ]
  },
  "OMEGA CLAMP WITH PROFILE COVER PLATE": {
    description: "These clamps are used to fix the mesh panels on the poles by using suitable fasteners. The profile cover plate provide the necessary holding strength and as such the shape of the cover plate.",
    specifications: [
      { label: "Omega Clamp", value: "178 mm X 35 mm, MS flat 35 mm width and 3.0 mm thick, as per IS 1730." },
      { label: "Profile Cover Plate", value: "178 mm X 50.20 mm, MS flat 3.0 mm thick, as per IS 1730." },
      { label: "Weight", value: "Combined weight of Omega Clamp with profile cover plate is 0.60 Kg ±8%." },
      { label: "Galvanizing", value: "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standard", value: "IS 13871." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "2800 Pieces." }
    ]
  },
  "INTERMEDIATE PANEL (IP) BINDER": {
    description: "Panel binders are used for connecting panel.",
    specifications: [
      { label: "Material", value: "M.S. Flat of size 25 x 3/5 mm, 160 mm long, with 2-slots as per IS 1730." },
      { label: "Weight", value: "0.2 Kg ± 10%." },
      { label: "Galvanizing Coating", value: "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standards", value: "IS 13871." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "3200 Pieces / 1600 set." }
    ]
  },
  "CORNER CLAMP": {
    description: "These clamps are used to fix the mesh panels on the poles by using suitable fasteners. These clamps are used where the angle between two adjacent fencepost is less than 180° angle.",
    specifications: [
      { label: "Corner Clamp", value: "132 mm X 132 mm long L shape, MS flat 35 mm width and 3.0 mm thick, as per IS 1730." },
      { label: "W clamp", value: "150 mm / 110 w shape as per drawing, MS flat 3.0 mm thick, as per IS 1730." },
      { label: "Cody clamp", value: "54 mm X32.5 mm, MS flat 3.0 mm thick, as per IS 1730." },
      { label: "Weight", value: "Combined weight of corner clamp with w clamp and two clamps is 0.40 Kg ±8%." },
      { label: "Galvanizing", value: "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standards", value: "IS 13871." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "As per customer requirement." }
    ]
  },
  "STRAINING Y ARM": {
    description: "Straining Y-Arm are installed for supporting Punched Tape Concertina Coils (PTCC). One straining Y-Arm is installed at every 30 meters.",
    specifications: [
      { label: "Material", value: "MS Angle Size – 50mm x 50mm x 5mm as per IS 2062-2011 (Yst = 210 MPa)." },
      { label: "Sleeve Cap", value: "Top Plate 90 mm diameter, 5 mm thick, welded to 2.90 mm thick 60.30 mm OD and 100 mm long M.S. pipe, having two sets of 14 mm diameter holes to fix mushroom nuts." },
      { label: "Weight", value: "5.11 Kgs ± 8%." },
      { label: "Length", value: "One Arm is 510 mm, angle of Y (between two arms can be) 90° / 120° degree." },
      { label: "Base Coating", value: "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standards", value: "IS:13871." },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "35 Pieces." }
    ]
  },
  "EYE BOLT FOR STRAINING Y-ARM": {
    description: "6 sets of Eye bolts with nuts and washers are to be used for fixing of each straining Y- arm for Razor tape termination.",
    specifications: [
      { label: "Material", value: "SS304 for C4 and SS 316 for C5." },
      { label: "Size", value: "M8 X 100 mm." },
      { label: "Weight", value: "Eye bolt, Nut and washer 0.10 Kg ± 10 %." },
      { label: "Quantity per KM", value: "210 Pieces." }
    ]
  },
  "INTERMEDIATE Y-ARM": {
    description: "Intermediate Y-Arm are installed for supporting Punched Tape Concertina Coils (PTCC). One Intermediate Y arm is installed at every post except the posts with Straining Y arms.",
    specifications: [
      { label: "Material", value: "MS Angle Size :50 mm x 50 mm x 5 mm / 40 mm x 40 mm x 4mm as per IS 2062-2011 (Yst = 210 MPa)." },
      { label: "Sleeve Cap", value: "Top plate - 2/3 mm thick MS Plate, 90 mm dia. Sleeve of 45 mm long pipe of 88.90 mm OD & 3.00 mm thick having two sets of 12 mm holes." },
      { label: "Weight", value: "3.09(40 mm x 40 mm x 4mm )/5.00 (50 mm x 50 mm x 5 mm) Kgs ± 8%" },
      { label: "Length", value: "One Arm is 510 mm, angle of Y (between two arms can be) 90 / 120° degree." },
      { label: "Base Coating", value: "Hot dip galvanized coating, done as per IS:2629, shall have minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },
      { label: "Coating", value: "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5." },
      { label: "Corrosion Coating Standards", value: "IS 13871" },
      { label: "Color", value: "RAL 6005." },
      { label: "Quantity per KM", value: "365 Pieces" }
    ]
  },
  "PTCC PUNCHED TAPE CONCERTINA COIL": {
    description: "Punched Tape Concertina Coil (PTCC) provides enhanced security at the top of the fence system.",
    specifications: [
      { label: "Concertina Coil", value: "850 mm dia/ 56 loops/ 3.5mm core wire." },
      { label: "Coil Diameter", value: "850 mm ± 50 mm." },
      { label: "Weight of coil", value: "20.01 Kg (± 5%)." },
      { label: "Steel Tape Dimensions", value: "Steel Tape material SS304 for C4 / SS 316 for C5 conforming to IS 6911." },
      { label: "Blade Thickness", value: "0.45 mm ± 0.02 mm." },
      { label: "Blade Length", value: "30 mm." },
      { label: "Blade Profile", value: "Medium Blade (TBBT), Centre to Centre distance between blades 50 mm." },
      { label: "Material of Clip", value: "SS304 for C4 / SS 316 for C5." },
      { label: "Core Wire Diameter", value: "3.5 mm ± 0.05 mm as per IS:6528." },
      { label: "Tensile Strength of wire", value: "1400 to 1500 N/sq.mm." },
      { label: "Core Wire", value: "SS304 for C4 / SS 316 for C5." },
      { label: "Quantity per KM", value: "100 Coils." }
    ]
  },
  "HOG RINGS": {
    description: "To secure concertina coil with Razor tape wire.",
    specifications: [
      { label: "Material", value: "SS 304 for C4 / SS 316 for C5; Dia: 3 mm." },
      { label: "Quantity per KM", value: "8000 Pieces." }
    ]
  },
  "RAZOR WIRE TAPE": {
    description: "100 Meters in each Roll.",
    specifications: [
      { label: "Weight of roll", value: "13.20 Kg (± 5%)." },
      { label: "Steel Tape Dimensions", value: "0.2 Kg ± 10%." },
      { label: "Blade Thickness", value: "0.45 mm ± 0.02 mm." },
      { label: "Blade Length", value: "30 mm." },
      { label: "Blade Profile", value: "Medium Blade (TBBT), Centre to Centre distance between blades 50 mm." },
      { label: "Material of Clip", value: "SS304 for C4 / SS 316 for C5." },
      { label: "Core Wire Diameter", value: "3.5 mm ± 0.05 mm as per IS:6528." },
      { label: "Tensile Strength of wire", value: "1400 to 1500 N/sq.mm." },
      { label: "Core Wire", value: "SS304 for C4 / SS 316 for C5." },
      { label: "Quantity per KM", value: "63 Bundle." }
    ]
  },
  "TIE WIRE FOR RAZOR TAPE": {
    description: "Stainless-steel tie wire is used for knotting razor tape at straining Y arm at each eyebolt location.",
    specifications: [
      { label: "Weight of roll", value: "8.8 gram per meter." },
      { label: "Wire Diameter", value: "1.2mm." },
      { label: "Steel Grade", value: "SS304 for C4 / SS316 for C5." },
      { label: "Length used per Y", value: "2 meters." },
      { label: "Quantity per KM", value: "70 meters (0.62Kg)." }
    ]
  },
  "M8X120MM MUSHROOM HEAD BOLT, NUT & WASHER": {
    description: "M8x120 mm mushroom head bolts with breakable head security nuts and washers are used to clamp Y arm to a fence post. For each Y arm two sets of bolts are required.",
    specifications: [
      { label: "Material", value: "SS304 for C4/ SS 316 for C5." },
      { label: "Size", value: "M8 X 120 mm." },
      { label: "Weight", value: "Bolt, Nut & Washer 0.050 Kg ± 8%." },
      { label: "Quantity per KM", value: "800 Set." }
    ]
  },
  "M8X75MM MUSHROOM HEAD BOLT, NUT & WASHER": {
    description: "M8x80 mm mushroom head bolts with breakable head security nuts and washers are used to clamp omega and profile plate at four mesh overlap junctions.",
    specifications: [
      { label: "Material", value: "SS304 for C4/ SS 316 for C5." },
      { label: "Size", value: "M8 X 75 mm." },
      { label: "Weight", value: "Bolt, Nut & Washer 0.035 Kg ± 8%." },
      { label: "Quantity per KM", value: "1600 Set." }
    ]
  },
  "M8X60MM MUSHROOM HEAD BOLT, NUT & WASHER": {
    description: "M8x60 mm mushroom head bolts with breakable head security nuts and washers are used to clamp omega and profile plate at two mesh overlap junctions.",
    specifications: [
      { label: "Material", value: "SS304 for C4/ SS 316 for C5." },
      { label: "Size", value: "M8 X 60 mm." },
      { label: "Weight", value: "Bolt, Nut & Washer 0.031 Kg ± 8 %." },
      { label: "Quantity per KM", value: "4000 Set." }
    ]
  },
  "M8X35MM MUSHROOM HEAD BOLT, NUT & WASHER": {
    description: "M8x35 mm mushroom head bolts with breakable head security nuts and washers are used to clamp IP binder at center of two mesh overlap junctions to remove the gap and make it sturdy between two mesh.",
    specifications: [
      { label: "Material", value: "SS304 for C4/ SS 316 for C5." },
      { label: "Size", value: "M8 X 35 mm." },
      { label: "Weight", value: "Bolt, Nut & Washer 0.025 Kg ± 8 %." },
      { label: "Quantity per KM", value: "3200 Set." }
    ]
  },
};

// Export types for TypeScript support
export type ComponentCategory = keyof typeof borderFenceComponents;
export type ComponentItem = typeof borderFenceComponents[ComponentCategory][number];
export type ComponentSpecification = typeof componentSpecifications[keyof typeof componentSpecifications];

























