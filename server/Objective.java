public class Objective{
    String nameIn; 
    int objectCountTotal;
    int objectCountModified; 
    int pointVal; 
    int multIn;
    int totalPoints;
    public Objective(String nameIn, int objectCountTotal, int objectCountModified, int pointVal, int multIn)
    {
        this.nameIn = nameIn;
        this.objectCountTotal = objectCountTotal;
        this.objectCountModified = objectCountModified;
        this.pointVal = pointVal;
        this.multIn = multIn;
        totalPoints = (pointVal * (objectCountTotal - objectCountModified)) + (pointVal * objectCountTotal - objectCountModified);
     }

}