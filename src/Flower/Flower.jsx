export const Flower = () => {
  const flowerName = 'רותם';
  const colorPetals = 'red';
  const colorCentralLeaf = 'green';

  return (
    <div style={{ backgroundColor: colorPetals, padding: '20px', borderRadius: '10px' }}
        onClick={() => alert(`אני פרח מסוג ${flowerName}`)}
    >  
      <h2 style={{ color: colorCentralLeaf, padding: '5px 15px', borderRadius: '10px' }}>{flowerName}</h2>
      <div style={{ position: 'relative', width: '100px', height: '100px', marginTop: '10px' }}>
        <div style={{ position: 'absolute', top: '0', left: '25px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals }}></div>
        <div style={{ position: 'absolute', bottom: '0', left: '25px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals }}></div>
        <div style={{ position: 'absolute', top: '25px', left: '0', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals }}></div>
        <div style={{ position: 'absolute', top: '25px', right: '0', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorPetals }}></div>
        
        <div style={{ position: 'absolute', top: '25px', left: '25px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: colorCentralLeaf, zIndex: '1' }}></div>
      </div>
    </div>
  );
}