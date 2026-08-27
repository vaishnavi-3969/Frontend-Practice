public class Test2 {

	public static void main(String[] args) {
		// Create an instance of Movie
		Movie jaws = new Movie();
		// Set the title to "Jaws"
		jaws.setTitle("Jaws");
		// Set the director to "Spielberg"
		jaws.setDirector("Spielberg");
		jaws.setRating("PG");
		// Display the movie's rating
		System.out.println(jaws.getRating());
	}
}

public class Movie {
	private String title;
	private String director;
	private String rating;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
}
