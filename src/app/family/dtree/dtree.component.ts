import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as dTree from 'd3-dtree';

@Component({
  selector: 'app-dtree',
  templateUrl: './dtree.component.html',
  styleUrls: ['./dtree.component.scss']
})
export class DtreeComponent implements OnInit {
  public treeData;

  constructor() {
    this.treeData = [
      {
        name: 'Thomas Sternberg',
        class: 'man',
        textClass: 'man',
        extra: {
          born: '11/21/34',
          cityOfBirth: 'Des Moines'
        },
        marriages: [
          {
            spouse: {
              name: 'Mary Magoon',
              class: 'woman',
              extra: {
                born: '7/11/35',
                cityOfBirth: 'Lacon'
              }
            },
            children: [
              {
                name: 'Richard Sternberg',
                class: 'man',
                textClass: 'man',
                extra: {
                  born: '11/21/34',
                  cityOfBirth: 'Lacon'
                },
                marriages: [
                  {
                    spouse: {
                      name: 'Lois Sternberg',
                      class: 'woman',
                      extra: {
                        born: '7/11/35',
                        cityOfBirth: 'Bakersfield'
                      }
                    },
                    children: [
                      {
                        name: 'James Gunnar Sternberg',
                        class: 'man',
                        extra: {
                          born: '10/16/1959',
                          cityOfBirth: 'Santa Monica'
                        },
                        marriages: [
                          {
                            spouse: {
                              name: 'Kristen Gronlund',
                              extra: {
                                born: '10/28/1966',
                                cityOfBirth: 'Seattle'
                              },
                              class: 'woman'
                            },
                            children: [
                              {
                                name: 'Sean Sternberg',
                                class: 'woman',
                                extra: {
                                  born: '4/10/1995',
                                  cityOfBirth: 'Bellevue'
                                },
                                marriages: [
                                  {
                                    spouse: {
                                      name: 'John Martin Sternberg',
                                      class: 'man',
                                      extra: {
                                        born: '7/11/35',
                                        cityOfBirth: 'Yakima'
                                      }
                                    },
                                    children: [
                                      {
                                        name: 'Anne Viola Sternberg',
                                        class: 'woman',
                                        extra: {
                                          born: '10/16/1959',
                                          cityOfBirth: 'Chicago'
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                name: 'Jeffrey Donald Sternberg',
                                class: 'man',
                                extra: {
                                  born: '2/7/1998'
                                },
                                marriages: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Thomas Claire Sternberg',
                        class: 'man',
                        extra: {
                          born: '10/16/1959'
                        },
                        marriages: [
                          {
                            spouse: {
                              name: 'Annette Conces',
                              extra: {
                                born: '10/28/1966'
                              },
                              class: 'woman'
                            },
                            children: [
                              {
                                name: 'Alison Claire Sternberg',
                                class: 'woman',
                                extra: {
                                  born: '4/10/1995'
                                },
                                marriages: [
                                  {
                                    spouse: {
                                      name: 'Martin Davenport',
                                      class: 'man',
                                      extra: {
                                        born: '7/11/35'
                                      }
                                    },
                                    children: [
                                      {
                                        name: 'Viola Sternberg',
                                        class: 'woman',
                                        extra: {
                                          born: '10/16/1959'
                                        }
                                      },
                                      {
                                        name: 'Donald Sternberg',
                                        class: 'man',
                                        extra: {
                                          born: '10/16/1959'
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                name: 'Jeffrey Donald Sternberg',
                                class: 'man',
                                extra: {
                                  born: '2/7/1998'
                                },
                                marriages: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Mary Elizabeth Sternberg',
                        class: 'man',
                        extra: {
                          born: '10/16/1959'
                        },
                        marriages: [
                          {
                            spouse: {
                              name: 'Steve Dagg',
                              extra: {
                                born: '10/28/1966'
                              },
                              class: 'man'
                            },
                            children: [
                              {
                                name: 'Benjamin Dagg',
                                class: 'man',
                                extra: {
                                  born: '4/10/1995'
                                },
                                marriages: []
                              },
                              {
                                name: 'Samuel Dagg',
                                class: 'man',
                                extra: {
                                  born: '2/7/1998'
                                },
                                marriages: []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
    console.log('this.treeData ', this.treeData);
    dTree.init(this.treeData, {
      target: '#graph',
      debug: true,
      height: 800,
      width: 1200,
      callbacks: {
        nodeClick: function(name, extra) {
          console.log(name);
        },
        textRenderer: function(name, extra, textClass) {
          console.log('name ', name, ' class ', extra, 'textClass ', textClass);
          if (extra) name = name + ' (' + extra.born + ')';
          return "<p align='center' class='" + textClass + "'>" + name + '</p>';
        }
      }
    });
  }
}
