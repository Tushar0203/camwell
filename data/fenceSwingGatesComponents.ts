// Border Fence Component Categories and Items
export const fenceSwingGatesComponents = {
  "Primary Structure": [
    { name: "A. GATE POST", imageUrl: "/products/swing-gate/gate-post.png" },
    { name: "B. GATE FRAME", imageUrl: "/products/swing-gate/gate-frame.png" },
    { name: "C. WICKET GATE FRAME", imageUrl: "/products/swing-gate/wicket-gate.png" },
    { name: "D. WELD MESH PANEL FOR GATE INFILL", imageUrl: "/products/swing-gate/weld-mesh.png" },
    { name: "E. COIL SUPPORT FRAME", imageUrl: "/products/swing-gate/coil-support.png" },
  ],
  "Fastening System": [
    { name: "H. TOP AND BOTTOM HINGES", imageUrl: "/products/swing-gate/top-and-bottom.png" },
    { name: "I. LOCK/HANDLE /ALDROP", imageUrl: "/products/swing-gate/lock-handle.png" },
  ],
  "Security Enhancement": [
    { name: "F. PTCC – 850 MM DIAMETER/16 LOOPS/3.5MM CORE WIRE", imageUrl: "/products/swing-gate/ptcc.png" },
    { name: "G. FLAT WRAP (PTCC): 610 MM DIAMETER/10 LOOPS/3.50 MM CORE WIRE", imageUrl: "/products/swing-gate/flat-wrap.png" },
  ],
};

// Component specifications data
export const componentSpecifications = {
  "A. GATE POST": {
    description: "No description available.",
    specifications: [
      { label: "Section", value: "150x150x6mm/150x150x8mm Mild steel Square Hollow section (SHS), conforming to IS 4923-2017 (Yst - 240MPa)." },
      { label: "Height", value: "3600/3950mm." },
      { label: "Qty per Gate", value: "2 No.s" },
      { label: "Base Coating", value: "Hot dip galvanized coating, done as per IS:2629, shall have minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },
      { label: "Thermoplastic Powder Coating", value: "The galvanized posts shall subsequently be thermoplastic powder coated after welding with a thickness of minimum 250 μm for C4/400 μm for C5." },,
      { label: "Color", value: "Green (RAL 6005) Coating Standard: IS 13871." }
    ]
  },
  "B. GATE FRAME": {
    description: "No description available.",
    specifications: [
      { label: "", value: "" },
    ]
  },
  "C. WICKET GATE FRAME": {
    description: "No description available.",
    specifications: [
      { label: "", value: "" },
    ]
  },
  "D. WELD MESH PANEL FOR GATE INFILL": {
    description: "No description available.",
    specifications: [
      { label: "", value: "" },
    ]
  },
  "E. COIL SUPPORT FRAME": {
    description: "No description available.",
    specifications: [
      { label: "Section", value: "50x50x2.6mm Mild steel Square Hollow section (SHS), conforming to IS 4923-2017 (Yst - 240MPa)." },
      { label: "Base Coating", value: "Hot dip galvanized coating, done as per IS:2629, shall have minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4759." },,
      { label: "Thermoplastic Coating", value: "The galvanized posts shall subsequently be thermoplastic coated, after welding, with a thickness of minimum 250 μm for C4 / 400 μm for C5." },,
      { label: "Color", value: "Green (RAL 6005) Coating Standard: IS 13871." }
    ]
  },
  "H. TOP AND BOTTOM HINGES": {
    description: "Industrial hinges play a critical role in maintaining the functionality and security of fencing systems, especially in environments requiring strict safety standards. These hinges are designed to support heavy loads, resist environmental wear, and provide smooth operation over extended periods, making them ideal for use in gates, doors, and panels associated with industrial fencing.",
    specifications: [
      { label: "Material", value: "SS304 for C4/SS 316 for C5." },
      { label: "Quantity", value: "2 sets per gate." }
    ]
  },
  "I. LOCK/HANDLE /ALDROP": {
    description: "When it comes to industrial fencing systems, locks, handles, and aldrop mechanisms are critical components that ensure security, durability, and ease of use. These hardware elements must adhere to stringent fencing standards to meet the demands of industrial environments, where safety and access control are paramount.",
    specifications: [
      { label: "Material", value: "SS304 for C4/SS 316 for C5." },
      { label: "Quantity", value: "One set per gate." }
    ]
  },
  "F. PTCC – 850 MM DIAMETER/16 LOOPS/3.5MM CORE WIRE": {
    description: "No description available.",
    specifications: [
      { label: "", value: "" },
    ]
  },
  "G. FLAT WRAP (PTCC): 610 MM DIAMETER/10 LOOPS/3.50 MM CORE WIRE": {
    description: "No description available.",
    specifications: [
      { label: "", value: "" },
    ]
  },
};

// Export types for TypeScript support
export type ComponentCategory = keyof typeof fenceSwingGatesComponents;
export type ComponentItem = typeof fenceSwingGatesComponents[ComponentCategory][number];
export type ComponentSpecification = typeof componentSpecifications[keyof typeof componentSpecifications];

























