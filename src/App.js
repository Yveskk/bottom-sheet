import BottomSheet from "./components/bottom-sheet/BottomSheet";
import {useState} from "react";

function App() {

    const [open, setOpen] = useState(false);

    return (
    <div className="App">

        <button className="btn btn-primary" onClick={event => setOpen(true)}>Open BottomSheet</button>

       <BottomSheet open={open} setOpen={setOpen} title={"Bottom Sheet"}>
          <div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque dolor, eligendi expedita
                  itaque labore laudantium minima modi non quis rem sequi sint tenetur? Iste laborum magnam repellat
                  suscipit velit.
              </div>
              <div>Alias doloremque expedita iusto similique. Adipisci blanditiis consectetur deleniti ipsum quam quas
                  quos, veniam voluptatum! Autem commodi consequatur doloremque fugiat in maxime, natus, nisi odio omnis
                  pariatur quaerat rem, repellendus.
              </div>
              <div>Autem doloremque ipsum nostrum possimus quidem quo. Cumque deleniti est quibusdam quis ullam?
                  Adipisci alias architecto, cumque distinctio fuga iusto nisi, numquam odio rem repellat sapiente
                  tempora totam velit veniam!
              </div>
              <div>Alias, aspernatur corporis cum facilis in ipsa laudantium libero neque odit rem saepe, sequi tenetur,
                  voluptas. Aliquid assumenda, corporis cumque explicabo libero maiores mollitia nobis odio, quas, sed
                  sit voluptatem.
              </div>
              <div>Ad architecto, aspernatur corporis dolorem dolores eius eum excepturi ipsum magni minima
                  necessitatibus nemo odio odit optio placeat porro quia sapiente sequi sunt voluptates. Fugit libero
                  nemo neque omnis ut.
              </div>
              <div>Aspernatur consequatur eligendi facilis libero minus molestias optio, tempora vero! Adipisci aperiam
                  assumenda, dolores facere harum molestiae nihil nisi obcaecati optio perspiciatis quibusdam quidem
                  recusandae repudiandae rerum sapiente, tempora vel.
              </div>
              <div>Amet aperiam commodi ipsa labore laboriosam officiis saepe voluptas? Accusantium ad culpa deserunt
                  eius, enim eos est expedita harum iure maiores molestias, nihil nostrum officiis, quas repudiandae
                  similique vitae voluptate.
              </div>
              <div>Ab aliquid distinctio dolore ducimus earum impedit laudantium libero maiores minima modi, numquam
                  quia ratione rerum similique totam vel vero. Ad commodi deserunt odit quibusdam totam voluptate? Harum
                  maiores, sint!
              </div>
              <div>Animi dolores ducimus eos nihil quia quo voluptatum! Commodi culpa dolore eligendi hic itaque laborum
                  minima nihil, nisi odio possimus quasi quibusdam repellendus saepe, ullam velit vero voluptate
                  voluptatibus! Dolor.
              </div>
              <div>Animi beatae deserunt eaque esse fuga hic illo impedit inventore iure iusto laborum maxime nam, nobis
                  nostrum nulla perspiciatis quae quidem quo reiciendis repellat reprehenderit saepe temporibus ullam
                  veritatis vero?
              </div>
              <div>Labore rem, reprehenderit! Aliquid atque consequatur cumque deleniti, doloribus eaque eum expedita
                  fugiat incidunt libero, nihil odio porro quaerat quas quibusdam quidem quis, quisquam ratione rem
                  saepe temporibus tenetur ut.
              </div>
              <div>Amet exercitationem laudantium maxime nisi nulla placeat quibusdam, quis tenetur unde voluptatum?
                  Adipisci autem et, explicabo fuga fugit id ipsa odio perferendis rem repellendus. Dolorum iste magnam
                  quia quis voluptas?
              </div>
              <div>Assumenda, laudantium, natus! Ad maxime sunt totam vitae. Accusantium ducimus eaque eius eligendi est
                  id ipsa libero minus nam nesciunt nisi, placeat, quae quas quidem quisquam sapiente sit vitae
                  voluptate.
              </div>
              <div>Alias consectetur consequatur dignissimos ducimus eligendi, error fugit hic id illum maxime nisi
                  perspiciatis quasi rem temporibus vel. Aliquid amet beatae deserunt dolore ducimus eaque, ex facere
                  iusto minus quidem.
              </div>
              <div>Cumque ducimus inventore magnam minus? Aliquam asperiores aspernatur at consequatur dolorum excepturi
                  facere fugiat fugit ipsam, iste maxime minus neque porro rem, similique, tempora ut voluptas. Fugiat
                  ipsam odio quisquam!
              </div>
              <div>Asperiores eveniet facere id laboriosam modi odio rem reprehenderit? Accusantium aliquid architecto,
                  cum deleniti earum eos error excepturi expedita ipsam magnam nobis odit, pariatur recusandae sequi
                  ullam ut velit voluptate?
              </div>
              <div>Adipisci architecto aspernatur commodi consequuntur dolores eaque earum eligendi eos fugiat ipsa
                  libero modi nemo nobis nostrum numquam optio quae quisquam ratione recusandae reprehenderit sit,
                  soluta unde vel vitae voluptate.
              </div>
              <div>A aliquid aperiam consequuntur corporis dolore dolorum ducimus eaque eius error est eveniet ex
                  exercitationem explicabo fuga harum hic ipsam minus natus provident qui saepe, sequi sint sunt velit
                  vitae?
              </div>
              <div>Aliquam architecto culpa cum, doloribus ea fugit incidunt laborum maxime molestiae mollitia nobis,
                  nulla omnis perspiciatis porro praesentium quaerat, quisquam voluptas! Esse hic libero minima
                  quisquam. Delectus nihil nisi tempora!
              </div>
              <div>Aliquid animi dolorem ex exercitationem fugit id itaque iure labore maiores minima, natus
                  necessitatibus omnis optio, porro possimus quas quia quis sapiente veniam vero? Ad delectus eos iusto
                  minima sit.
              </div>
          </div>
       </BottomSheet>
    </div>
  );
}

export default App;
