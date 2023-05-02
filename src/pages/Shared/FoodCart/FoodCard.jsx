import React from 'react';
import { Button,Card, } from 'react-bootstrap';

const FoodCard = ({ food }) => {
    // const { _id, img, title, price, description } = food;

    return (
        <div>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Teriyaki Chicken Bowl</Card.Title>
                    <Card.Text>
                    Grilled chicken served on a bed of rice with teriyaki sauce, steamed vegetables, and sesame seeds.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/fowl-stewed-with-soy-sauce-chicken-thigh_1205-7696.jpg?w=996&t=st=1683040879~exp=1683041479~hmac=0497c6c5d92184847cfcff9de9c2ec19c6a8b417e290d6daaed49da95b07c855" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Margherita Pizza</Card.Title>
                    <Card.Text>
                    A classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/tasty-homemade-traditional-pizza-italian-recipe_24972-2141.jpg?w=996&t=st=1683041066~exp=1683041666~hmac=3fcc9fea981871376dbc002d094e0712be4f18b0c6c688cd12fdd258b76ad59c" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Beef Burger</Card.Title>
                    <Card.Text>
                    A juicy beef patty topped with lettuce, tomato, onion, and your choice of cheese. Served with fries.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=996&t=st=1683041115~exp=1683041715~hmac=49e655d1f41f34c1a6bef4cc48f2fd65d68e260e01a4abc1396c051f7e8c59b2" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Pad Thai</Card.Title>
                    <Card.Text>
                    Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts in a tangy tamarind sauce.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/flat-lay-noodles-with-vegetables-chicken_23-2148377422.jpg?w=996&t=st=1683041169~exp=1683041769~hmac=1b652be2a974ed1a31307cc0aaa2bc039b8308dca42a2145bf98dd6ae2a32426" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>BBQ Ribs</Card.Title>
                    <Card.Text>
                    Fall-off-the-bone tender pork ribs smothered in BBQ sauce, served with coleslaw and fries.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/side-view-mix-meat-snacks-with-french-fries-grilled-vegetables-salad-sauces-board_141793-5021.jpg?w=996&t=st=1683041222~exp=1683041822~hmac=bdd25ddd764667a1b2ab737e8d690ccc6f8e9282dc4608d4ff1b6f1f17d0f589" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Caesar Salad</Card.Title>
                    <Card.Text>
                    Crisp romaine lettuce with shaved parmesan cheese, croutons, and a creamy Caesar dressing.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/closeup-caesar-salad-black-plate-against-black-background_844466-448.jpg?w=900" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Miso Soup</Card.Title>
                    <Card.Text>
                    A traditional Japanese soup made with miso paste, tofu, seaweed, and scallions.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/tomato-soup-with-green-table_140725-2447.jpg?w=900&t=st=1683041344~exp=1683041944~hmac=228ce1c730ce4efa8f73f191fc0dc54861350a236e2004317c39638fe4332ed4" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Fish Tacos</Card.Title>
                    <Card.Text>
                    Grilled fish, shredded cabbage, and a tangy sauce in soft tortillas, served with rice and beans.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14227.jpg?w=996&t=st=1683041424~exp=1683042024~hmac=ba46a44166a43ef2571bc608af8b99d1c92ea2ecb73461c961f793567b749c3d" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Chicken Alfredo</Card.Title>
                    <Card.Text>
                    Fettuccine pasta in a creamy Alfredo sauce with grilled chicken, mushrooms, and garlic.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/mushroom-risotto-garnished-with-grated-parmesan-parsley_141793-1932.jpg?w=996&t=st=1683041491~exp=1683042091~hmac=f9365321e62bb803564b966c668a8992e48c1bb734954dd6f65174d8a60d3295" />
                    <Button className='mt-2'  variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Falafel Wrap</Card.Title>
                    <Card.Text>
                    A warm pita filled with crispy falafel, lettuce, tomato, cucumber, and tahini sauce.
                    </Card.Text>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/side-view-chicken-roll-grilled-chicken-lettuce-cucumber-tomato-mayo-pita_141793-4849.jpg?w=996&t=st=1683041544~exp=1683042144~hmac=083207737d1b4321fd2766a44cc17aa4978a646422a170bfc3998fd4b6369f40" />
                    <Button className='mt-2' variant="outline-secondary">Add To Favourite</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default FoodCard;