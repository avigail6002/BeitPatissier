namespace BeitPatissierServer.Models
{
    public class Recipe //מתכון
    {
        public int RecipeId { get; set; }
        public string Name { get; set; } // שם המתכון
        public string Description { get; set; } // תיאור המתכון
        public List<RecipeLine> RecipeLines { get; set; } // רשימת חומרי הגלם והכמויות במתכון
        public List<string> Steps { get; set; } // שלבי ההכנה
        public int PreparationTime { get; set; } // זמן הכנה בדקות
        public int CookingTime { get; set; } // זמן בישול/אפייה בדקות
        public int Servings { get; set; } // מספר מנות
    }
}
