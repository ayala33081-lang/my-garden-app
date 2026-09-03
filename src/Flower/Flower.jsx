export const Flower = ({ flowerName, colorPetals, colorCentralLeaf }) => {
  return (
    <div style={{ backgroundColor: colorPetals || 'red', padding: '20px', borderRadius: '10px' }}
        onClick={() => alert(`אני פרח מסוג ${flowerName || 'רותם'}`)}
    >  
      <h2 style={{ color: colorCentralLeaf || 'green', padding: '5px 15px', borderRadius: '10px' }}>
        {flowerName || 'רותם'}
      </h2>
      <div style={{ position: 'relative', width: '100px', height: '100px', marginTop: '10px' }}>
        <div style={{ position: 'absolute', top: '0', left: '25px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals || 'red' }}></div>
        <div style={{ position: 'absolute', bottom: '0', left: '25px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals || 'red' }}></div>
        <div style={{ position: 'absolute', top: '25px', left: '0', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals || 'red' }}></div>
        <div style={{ position: 'absolute', top: '25px', right: '0', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals || 'red' }}></div>
        
        <div style={{ position: 'absolute', top: '25px', left: '25px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorCentralLeaf || 'green', zIndex: '1' }}></div>
      </div>
    </div>
  );
}