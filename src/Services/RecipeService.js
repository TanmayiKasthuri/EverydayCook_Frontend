

const API_URL = "http://127.0.0.1:8000/api/recipes/";
const API_URL_SUFFIX = "?format=json";

const RecipeService = {

    async getAllRecipes() {
        try {
          const response = await fetch(API_URL + API_URL_SUFFIX);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("API CALLED DATA FOLLOWING")
          console.log(data)
          return data;
        } catch (error) {
          console.error('Failed to fetch recipes:', error);
          return [];
        }
      }
    ,

    async getRecipeById(id)
    {
        console.log(id)
        console.log(API_URL+id+API_URL_SUFFIX)
        try{
            const response=await fetch(API_URL+id+API_URL_SUFFIX);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data)
          return data;
        } catch (error) {
          console.error('Failed to fetch recipes:', error);
          return [];
        }
        //return RECIPES["recipes"][0];
    }
        //return RECIPES["recipes"][0];
        //return RECIPES["recipes"].find(recipe => recipe.id === id);
    }


export default RecipeService;

const RECIPES = {
    "recipes": [
      {
        "name": "Tacos",
        "cuisine": "Mexican",
        "type": "Non-Veg",
        "meal": "Lunch",
        "tags": ["High-Protein", "Spicy"],
        "alternate_ingredients": {
          "ground beef": ["chicken", "pork", "tofu"],
          "taco shells": ["tortillas", "lettuce wraps"]
        },
        "ingredients": [
          "1 lb ground beef",
          "1 packet taco seasoning",
          "8 taco shells",
          "1 cup shredded lettuce",
          "1 cup diced tomatoes",
          "1 cup shredded cheese",
          "1/2 cup sour cream",
          "1/2 cup salsa"
        ],
        "instructions": [
          "Cook the ground beef in a large skillet over medium heat until browned. Drain any excess fat.",
          "Add the taco seasoning and follow the package instructions.",
          "Warm the taco shells according to the package instructions.",
          "Fill the taco shells with the seasoned beef.",
          "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
        ]
      },
      {
        "name": "Caesar Salad",
        "cuisine": "American",
        "type": "Non-Veg",
        "meal": "Appetizer",
        "tags": ["Low-Carb", "Gluten-Free"],
        "alternate_ingredients": {
          "romaine lettuce": ["kale", "mixed greens"],
          "chicken breast": ["shrimp", "tofu"]
        },
        "ingredients": [
          "1 large head of romaine lettuce, chopped",
          "1/2 cup grated parmesan cheese",
          "1 cup croutons",
          "1/2 cup Caesar dressing",
          "1 grilled chicken breast, sliced",
          "1/4 cup chopped bacon"
        ],
        "instructions": [
          "In a large bowl, combine the romaine lettuce, parmesan cheese, and croutons.",
          "Add the Caesar dressing and toss to coat.",
          "Top with the grilled chicken slices and chopped bacon.",
          "Serve immediately."
        ]
      },
      {
        "name": "Margherita Pizza",
        "cuisine": "Italian",
        "type": "Vegetarian",
        "meal": "Dinner",
        "tags": ["Comfort Food", "Kid-Friendly"],
        "alternate_ingredients": {
          "pizza dough": ["cauliflower crust", "whole wheat crust"],
          "mozzarella cheese": ["vegan cheese", "provolone"]
        },
        "ingredients": [
          "1 pizza dough",
          "1/2 cup tomato sauce",
          "1 cup shredded mozzarella cheese",
          "1 large tomato, sliced",
          "1/4 cup fresh basil leaves",
          "2 tbsp olive oil",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "Preheat your oven to 475°F (245°C).",
          "Roll out the pizza dough on a floured surface to your desired thickness.",
          "Transfer the dough to a baking sheet or pizza stone.",
          "Spread the tomato sauce evenly over the dough.",
          "Sprinkle the mozzarella cheese over the sauce.",
          "Arrange the tomato slices on top of the cheese.",
          "Drizzle with olive oil and season with salt and pepper.",
          "Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly.",
          "Remove from the oven and top with fresh basil leaves. Serve immediately."
        ]
      },
      {
        "name": "Chocolate Chip Cookies",
        "cuisine": "American",
        "type": "Vegetarian",
        "meal": "Dessert",
        "tags": ["Kid-Friendly", "Sweet"],
        "alternate_ingredients": {
          "butter": ["margarine", "coconut oil"],
          "chocolate chips": ["white chocolate chips", "dark chocolate chunks"]
        },
        "ingredients": [
          "1 cup unsalted butter, softened",
          "1 cup white sugar",
          "1 cup packed brown sugar",
          "2 large eggs",
          "2 tsp vanilla extract",
          "3 cups all-purpose flour",
          "1 tsp baking soda",
          "1/2 tsp baking powder",
          "1/2 tsp salt",
          "2 cups semisweet chocolate chips"
        ],
        "instructions": [
          "Preheat your oven to 350°F (175°C).",
          "In a large bowl, cream together the butter, white sugar, and brown sugar until smooth.",
          "Beat in the eggs one at a time, then stir in the vanilla.",
          "Combine the flour, baking soda, baking powder, and salt; gradually stir into the creamed mixture.",
          "Fold in the chocolate chips.",
          "Drop by large spoonfuls onto ungreased baking sheets.",
          "Bake for about 10 minutes, or until the edges are nicely browned.",
          "Cool on wire racks before serving."
        ]
      },
      {
        "name": "Tom Yum Soup",
        "cuisine": "Thai",
        "type": "Non-Veg",
        "meal": "Appetizer",
        "tags": ["Spicy", "Low-Calorie"],
        "alternate_ingredients": {
          "shrimp": ["chicken", "tofu"],
          "fish sauce": ["soy sauce", "tamari"]
        },
        "ingredients": [
          "1 lb shrimp, peeled and deveined",
          "4 cups chicken broth",
          "2 cups water",
          "1 stalk lemongrass, cut into 2-inch pieces",
          "3 kaffir lime leaves",
          "3 slices galangal",
          "2 Thai chilies, crushed",
          "1 cup mushrooms, sliced",
          "2 tomatoes, quartered",
          "2 tbsp fish sauce",
          "1 tbsp lime juice",
          "1 tbsp sugar",
          "Fresh cilantro for garnish"
        ],
        "instructions": [
          "In a large pot, bring the chicken broth and water to a boil.",
          "Add the lemongrass, kaffir lime leaves, galangal, and Thai chilies. Simmer for 5 minutes.",
          "Add the mushrooms and tomatoes. Cook for another 3 minutes.",
          "Add the shrimp and cook until they turn pink, about 3 minutes.",
          "Stir in the fish sauce, lime juice, and sugar.",
          "Remove from heat and garnish with fresh cilantro before serving."
        ]
      },
      {
        "name": "Spaghetti Carbonara",
        "cuisine": "Italian",
        "type": "Non-Veg",
        "meal": "Dinner",
        "tags": ["High-Protein", "Comfort Food"],
        "alternate_ingredients": {
          "spaghetti": ["pasta", "linguine", "fettuccine"],
          "pancetta": ["bacon", "prosciutto"],
          "pecorino cheese": ["parmesan cheese", "romano cheese"]
        },
        "ingredients": [
          "200g spaghetti",
          "100g pancetta",
          "2 large eggs",
          "50g pecorino cheese",
          "50g parmesan",
          "2 plump garlic cloves",
          "50g unsalted butter",
          "sea salt",
          "freshly ground black pepper"
        ],
        "instructions": [
          "Put a large saucepan of water on to boil.",
          "Finely chop the pancetta, having first removed any rind.",
          "Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside.",
          "Add 1 tsp salt to the boiling water, add the spaghetti and cook according to the packet instructions.",
          "Squash the garlic with the blade of a knife, just to bruise it.",
          "Melt the butter in a medium frying pan and add the pancetta and garlic.",
          "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. Discard the garlic.",
          "Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta.",
          "Take the pan of spaghetti and pancetta off the heat.",
          "Quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn't scramble, and everything is coated.",
          "Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You don't want it wet, just moist. Season with a little salt, if needed.",
          "Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper."
        ]
      },
      {
        "name": "Chicken Curry",
        "cuisine": "Indian",
        "type": "Non-Veg",
        "meal": "Dinner",
        "tags": ["Gluten-Free", "High-Protein"],
        "alternate_ingredients": {
          "chicken breast": ["paneer", "lamb", "tofu"]
        },
        "ingredients": [
          "1 lb chicken breast, cut into cubes",
          "1 large onion, chopped",
          "2 cloves garlic, minced",
          "1 tbsp ginger, minced",
          "2 tbsp curry powder",
          "1 tsp ground cumin",
          "1 tsp ground coriander",
          "1/2 tsp cayenne pepper",
          "1 can (14 oz) diced tomatoes",
          "1 can (14 oz) coconut milk",
          "2 tbsp vegetable oil",
          "Salt to taste",
          "Fresh cilantro for garnish"
        ],
        "instructions": [
          "Heat the oil in a large pan over medium heat.",
          "Add the chopped onions and sauté until golden brown.",
          "Add the minced garlic and ginger and cook for another minute.",
          "Stir in the curry powder, ground cumin, ground coriander, and cayenne pepper. Cook for 2 minutes.",
          "Add the chicken cubes and cook until they are no longer pink.",
          "Pour in the diced tomatoes and coconut milk. Stir well to combine.",
          "Bring the mixture to a simmer and cook for 20 minutes, or until the chicken is cooked through and the sauce has thickened.",
          "Season with salt to taste.",
          "Garnish with fresh cilantro before serving. Serve with rice or naan bread."
        ]
      },
      {
        "name": "Vegetable Stir Fry",
        "cuisine": "Chinese",
        "type": "Vegan",
        "meal": "Lunch",
        "tags": ["Low-Calorie", "Diabetic-Friendly"],
        "alternate_ingredients": {
          "red bell pepper": ["green bell pepper", "yellow bell pepper"],
          "broccoli": ["cauliflower", "asparagus"],
          "snow peas": ["snap peas", "green beans"]
        },
        "ingredients": [
          "2 tbsp vegetable oil",
          "1 large red bell pepper, sliced",
          "1 large yellow bell pepper, sliced",
          "1 medium broccoli, cut into florets",
          "1 large carrot, sliced",
          "1 cup snow peas",
          "3 cloves garlic, minced",
          "1 tbsp ginger, minced",
          "1/4 cup soy sauce",
          "2 tbsp hoisin sauce",
          "1 tbsp cornstarch",
          "1/4 cup water",
          "Cooked rice or noodles for serving"
        ],
        "instructions": [
          "Heat the vegetable oil in a large wok or frying pan over high heat.",
          "Add the garlic and ginger and stir-fry for 30 seconds.",
          "Add the bell peppers, broccoli, carrot, and snow peas. Stir-fry for 5-7 minutes, or until the vegetables are tender-crisp.",
          "In a small bowl, mix the soy sauce, hoisin sauce, cornstarch, and water.",
          "Pour the sauce over the vegetables and stir to coat. Cook for another 2-3 minutes, or until the sauce has thickened.",
          "Serve the stir fry over cooked rice or noodles."
        ]
      },
      {
        "name": "Hummus",
        "cuisine": "Middle Eastern",
        "type": "Vegan",
        "meal": "Appetizer",
        "tags": ["High-Fiber", "Diabetic-Friendly"],
        "alternate_ingredients": {
          "chickpeas": ["black beans", "white beans"],
          "tahini": ["peanut butter", "almond butter"]
        },
        "ingredients": [
          "1 can (15 oz) chickpeas, drained and rinsed",
          "1/4 cup fresh lemon juice",
          "1/4 cup well-stirred tahini",
          "1 small garlic clove, minced",
          "2 tablespoons extra-virgin olive oil",
          "1/2 teaspoon ground cumin",
          "Salt to taste",
          "2 to 3 tablespoons water",
          "Dash of ground paprika, for serving"
        ],
        "instructions": [
          "Combine tahini and lemon juice and process for 1 minute until creamy.",
          "Add the olive oil, minced garlic, cumin, and salt to the whipped tahini and lemon juice. Process for 30 seconds, scrape the sides, and then process for another 30 seconds.",
          "Add half of the chickpeas to the processor and process for 1 minute. Scrape sides and bottom of the bowl, then add remaining chickpeas and process until thick and smooth.",
          "If the hummus is too thick or has bits of chickpea, slowly add 2 to 3 tablespoons of water until the consistency is perfect.",
          "Serve with a dash of paprika and a drizzle of olive oil."
        ]
      },
      {
        "name": "Pancakes",
        "cuisine": "American",
        "type": "Vegetarian",
        "meal": "Breakfast",
        "tags": ["Kid-Friendly", "Sweet"],
        "alternate_ingredients": {
          "all-purpose flour": ["whole wheat flour", "gluten-free flour"],
          "milk": ["almond milk", "soy milk"]
        },
        "ingredients": [
          "1 cup all-purpose flour",
          "2 tablespoons sugar",
          "2 teaspoons baking powder",
          "1/2 teaspoon salt",
          "1 cup milk",
          "2 tablespoons melted butter",
          "1 large egg",
          "1 teaspoon vanilla extract"
        ],
        "instructions": [
          "In a large bowl, sift together the flour, sugar, baking powder, and salt.",
          "In another bowl, whisk together the milk, melted butter, egg, and vanilla extract.",
          "Pour the wet ingredients into the dry ingredients and stir until just combined.",
          "Heat a griddle or frying pan over medium heat and lightly grease with butter or oil.",
          "Pour 1/4 cup of batter onto the griddle for each pancake. Cook until bubbles form on the surface, then flip and cook until browned on the other side.",
          "Serve hot with syrup, butter, or your favorite toppings."
        ]
      },
      {
        "name": "Beef Stroganoff",
        "cuisine": "Russian",
        "type": "Non-Veg",
        "meal": "Dinner",
        "tags": ["Comfort Food", "High-Protein"],
        "alternate_ingredients": {
          "beef": ["chicken", "mushrooms"],
          "sour cream": ["Greek yogurt", "heavy cream"]
        },
        "ingredients": [
          "1 lb beef sirloin, cut into thin strips",
          "1 onion, chopped",
          "1 clove garlic, minced",
          "1 cup beef broth",
          "1 cup sour cream",
          "2 tablespoons flour",
          "2 tablespoons butter",
          "Salt and pepper to taste",
          "Cooked egg noodles or rice for serving"
        ],
        "instructions": [
          "Melt butter in a large skillet over medium heat. Add the onion and garlic, and cook until softened.",
          "Add the beef strips and cook until browned.",
          "Sprinkle the flour over the beef and stir well.",
          "Add the beef broth and bring to a simmer. Cook for 5 minutes or until the sauce thickens.",
          "Stir in the sour cream and season with salt and pepper.",
          "Serve over cooked egg noodles or rice."
        ]
      },
      {
        "name": "Greek Salad",
        "cuisine": "Greek",
        "type": "Vegetarian",
        "meal": "Side Dish",
        "tags": ["Low-Calorie", "Diabetic-Friendly"],
        "alternate_ingredients": {
          "feta cheese": ["goat cheese", "vegan feta"],
          "kalamata olives": ["black olives", "green olives"]
        },
        "ingredients": [
          "1 large cucumber, diced",
          "4 large tomatoes, diced",
          "1 red onion, thinly sliced",
          "1 green bell pepper, diced",
          "1/2 cup kalamata olives",
          "1/2 cup crumbled feta cheese",
          "1/4 cup olive oil",
          "2 tablespoons red wine vinegar",
          "1 teaspoon dried oregano",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "In a large bowl, combine the cucumber, tomatoes, red onion, bell pepper, and olives.",
          "In a small bowl, whisk together the olive oil, red wine vinegar, oregano, salt, and pepper.",
          "Pour the dressing over the salad and toss to coat.",
          "Sprinkle with crumbled feta cheese before serving."
        ]
      },
      {
        "name": "Pad Thai",
        "cuisine": "Thai",
        "type": "Non-Veg",
        "meal": "Dinner",
        "tags": ["Spicy", "High-Protein"],
        "alternate_ingredients": {
          "shrimp": ["chicken", "tofu"],
          "fish sauce": ["soy sauce", "tamari"]
        },
        "ingredients": [
          "8 oz rice noodles",
          "2 tablespoons vegetable oil",
          "1 lb shrimp, peeled and deveined",
          "3 cloves garlic, minced",
          "2 large eggs, beaten",
          "1 cup bean sprouts",
          "1/2 cup chopped peanuts",
          "1/4 cup fish sauce",
          "2 tablespoons tamarind paste",
          "2 tablespoons brown sugar",
          "1 lime, cut into wedges",
          "Fresh cilantro for garnish"
        ],
        "instructions": [
          "Cook the rice noodles according to package instructions. Drain and set aside.",
          "In a large skillet, heat the vegetable oil over medium-high heat. Add the shrimp and cook until pink and opaque. Remove and set aside.",
          "Add the garlic to the skillet and cook for 30 seconds. Push to one side of the skillet.",
          "Pour the beaten eggs into the skillet and scramble until set.",
          "Add the cooked noodles, bean sprouts, shrimp, fish sauce, tamarind paste, and brown sugar. Toss to combine and cook for another 2-3 minutes.",
          "Serve garnished with chopped peanuts, lime wedges, and fresh cilantro."
        ]
      }
    ]
  }