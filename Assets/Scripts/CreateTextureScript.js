function Start () {
    // Create a new texture and assign it to the renderer's material
    var texture = new Texture2D (128, 128);
    renderer.material.mainTexture = texture;
    
    // Apply all SetPixel calls
    texture.Apply();
}