public var sprayAmount : float;
// Attach this script to a camera and it will paint black pixels in 3D 
// on whatever the user clicks. Make sure the mesh you want to paint 
// on has a mesh collider attached.

function Start () {
	sprayAmount = 0;
}

function Update () {
	
    // Only when we press the mouse
    if (!Input.GetMouseButton (0) || !(sprayAmount > 0))
        return;
	
    // Only if we hit something, do we continue
    var hit : RaycastHit;
    
    if (!Physics.Raycast(camera.ScreenPointToRay(Vector3(Screen.width * 0.5, Screen.height * 0.5,0)),hit,7.0f)) {
    	Debug.Log("Raycast Missed!");
        return;
    }
    // Just in case, also make sure the collider also has a renderer
    // material and texture. Also we should ignore primitive colliders.
    var renderer : Renderer = hit.collider.renderer;
    var boxCollider = hit.collider as MeshCollider;
	
    if (renderer == null || renderer.sharedMaterial == null ||
        renderer.sharedMaterial.mainTexture == null || boxCollider == null) {
        return;
 	}
    // Now draw a pixel where we hit the object
    var tex : Texture2D = renderer.material.mainTexture;
    var pixelUV = hit.textureCoord;
    pixelUV.x *= tex.width;
    pixelUV.y *= tex.height;
    tex.SetPixel(pixelUV.x, pixelUV.y, Color.red);
 
    tex.Apply();
    sprayAmount -= 1;
    Debug.Log(sprayAmount);
}