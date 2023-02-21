import React, { Component } from 'react';
import "./style.css";



class Navbar extends Component {
    render() {
        return (
            <>
                <div id="new1" class="position-relative overflow-hidden  text-center">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-6 fw-normal">Algortithm Visualization</h1>
                        <p class="lead fw-normal">"An Algorithm Must Be Seen To Be Believed"</p>
                        <a class="btn btn-outline-light" href="#">Learn With Us</a>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>

                <section class="section about">
                    <div class="section-center about-center">

                        <article class="about-img">
                            <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80" class="hero-photo" alt="MyPhoto" />
                        </article>

                        <article class="about-info">

                            <div class="section-title about-title">
                                <h2>Algorithm Visualizer</h2>

                                <div class="underline3"></div>
                            </div>

                            <p>
                                Algorithm Visualizer is an interactive way and platform that visualize the algorithms in two domain i.e. Path Finding and Sort Visual algorithm. The project focuses on visualizng the algorithm and try to make easier to understand and learn the algorithm.
                            </p>
                            <p>
                                Alot of research has been done by global univsersities about the current process of learning and understanding the algorithm, one of the creativity way is visualization.
                            </p>
                            <p>
                                Sometimes, it is harder to understand the algorithm by just reading the theory. So visualization will help to learn better.
                            </p>
                            <button type="button" class="btn btn-dark mr-3">Path Algorithm</button>
                            <button type="button" class="btn btn-dark mr-3">Sort Algorithm</button>
                            <button type="button" class="btn btn-dark mr-3">Recursive Sort Algorithm</button>
                            <button type="button" class="btn btn-dark">N Algorithm</button>

                        </article>
                    </div>
                </section>

                <section class="section bg-grey feat ">
                    <div class="features-title">
                        <h2>Features</h2>


                        <div class="underline"></div>
                    </div>
                    <div class="section-center features-center">

                        <article class="features">
                            <i class="fab fa-pagelines features-icon"></i>
                            <h4>Path Finder</h4>

                            <div class="underline2"></div>
                            <p>
                                At its core, a pathfinding algorithm seeks to find the shortest path between two point. It will cover the algorithms like BFS, DFS, Dijkstra’s and A* algorithm. User can add the walls in between points to make a complicated path. User can also choose the different mazes like random and recursive.
                            </p>
                        </article>
                       

                        <article class="features">

                            <i class="fab fa-maxcdn features-icon"></i>
                            <h4>Sort Algorithm</h4>

                            <div class="underline2"></div>
                            <p>
                                Sorting is used to sort the element from array of lists. It will cover the algorithms like bubble, merge, quick and heap sort. User can choose the size of array, speed of algorithm. User can also generate a list of new array. Enjoy learning with your own speed i.e. slow, medium, fast!
                            </p>
                        </article>

                        <article class="features">

                            <i class="fab fa-xing features-icon"></i>
                            <h4>Recursive Algorithm</h4>

                            <div class="underline2"></div>
                            <p>
                            A recursive algorithm calls itself with smaller input values and returns the result for the current input by carrying out basic operations on the returned value for the smaller input.
                            </p>
                        </article>

                        <article class="features4" >
                            <i class="fab fa-pagelines features-icon"></i>
                            <h4 class="mt-3">N Queen</h4>

                            <div class="underline2"></div>
                            <p>
                            The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other. For example, the following is a solution for the 4 Queen problem.
                            </p>
                        </article>

                    </div>
                </section>
               

                {/* <section class="section algorithmproject" id="project">
                    <div class="section-title">
                        <h2>Project</h2>
                        <div class="underline"></div>
                    </div>
                    <div class="section-center algorithmproject-center">
                        <article>
                            <div class="card">
                                <div class="card-side card-front">
                                    <img src="https://happycoding.io/tutorials/libgdx/images/pathfinding-12.png" alt="" />
                                    <div class="card-info">
                                        <h4>Path Finder</h4>
                                        <p>
                                        A pathfinder simply is the individual which leads a swarm. This entity leads the swarm and this entity leads various acts. In addition, this entity takes the swarm to destinations including pastures, water and feeding areas. The group of animals frequently decide the movement between members via social order.
                                        </p>
                                        <div class="card-footer">
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="card-side card-back">
                                    <button class="btn" ><a href="https://online.stanford.edu/courses/soe-ycsalgorithms1-algorithms-design-and-analysis-part-1">Algorithm</a></button>
                                    <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">Read More</a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div class="card">
                                <div class="card-side card-front">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Shell_sorting_algorithm_color_bars.svg/220px-Shell_sorting_algorithm_color_bars.svg.png" alt="" />
                                    <div class="card-info">
                                        <h4>Path Algorithm</h4>
                                        <p>
                                            At its core, a pathfinding algorithm seeks to find the shortest path between two points.Some of the algorithms are BFS, DFS, Dijkstra`s.
                                        </p>
                                        <div class="card-footer">
                                            
                                            <p>Click To Play</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-side card-back">
                                    <button class="btn">
                                        <a href="path/index.html">Path Visualization</a></button>
                                    <a href="https://medium.com/omarelgabrys-blog/path-finding-algorithms-f65a8902eb40">Read More</a>
                                </div>
                            </div>
                        </article>
                       
                        <article>
                            <div class="card">
                                <div class="card-side card-front">
                                    <img src="images/sort1.jpg" alt="" />
                                    <div class="card-info">
                                        <h4>Sort Algorithm</h4>
                                        <p>
                                            Sorting the array of items with required speed and acquire patterns.Set of algorithm which will be used for sorting is Bubble sort, Merge sort, Quick sort, Heap sort.
                                        </p>
                                        <div class="card-footer">
                                            
                                            <p>Click To Play</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-side card-back">
                                    <button class="btn">
                                        <a href="sort/index.html">Sort Visualization</a>
                                    </button>
                                    <a href="https://lamfo-unb.github.io/2019/04/21/Sorting-algorithms/">Read More</a>
                                </div>
                            </div>
                        </article>
                    </div>    
                </section> */}


                <div class="container">
                    <footer class="py-3 my-4">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                            <li class="nav-item"><a href="AlgorithmVisualizer#/pathfinder" class="nav-link px-2 text-muted">Path Finder</a></li>
                            <li class="nav-item"><a href="AlgorithmVisualizer#/sort" class="nav-link px-2 text-muted">Sorting</a></li>
                            <li class="nav-item"><a href="AlgorithmVisualizer#/recursiveSort" class="nav-link px-2 text-muted">Recursive Sort</a></li>
                            <li class="nav-item"><a href="/AlgorithmVisualizer#/nqueen" class="nav-link px-2 text-muted">N Queen</a></li>
                            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                        </ul>
                        <p class="text-center text-muted">© 2022 Algorithm Visualizer , Inc</p>
                    </footer>
                </div>





            </>
        );
    }
}

export default Navbar;