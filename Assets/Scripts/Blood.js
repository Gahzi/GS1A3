var newObject : Transform;
var duration : float;

private var startTime = Time.time;

function Update () {

if(Time.time - startTime >= duration)
{
startTime = Time.time;
var xPos  : float;
xPos = transform.position.x +Random.Range(-1.0,1.0);
var  zPos : float;
zPos = transform.position.z +Random.Range(-1.0,1.0);
Debug.Log("xPos = "+xPos);

Instantiate(newObject, Vector3(xPos,0.01,zPos), transform.rotation);
//Debug.Log("createBlood");
}


}