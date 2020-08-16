import GenericService from "./GenericService";

class BlogService extends GenericService {
  constructor() {
    super();
  }

  addStory = (data) => this.post("stories/addStory", data);
  deleteStory = (_id) => this.delete("stories/delStory/" + _id);
  updateStory = (_id, data) => this.put("stories/updateStory/" + _id, data);
  getStory = () => this.get("stories/getStories");
  getSingleStory = (id) => this.get("stories/getStories/" + id);
}

let blogService = new BlogService();
export default blogService;
