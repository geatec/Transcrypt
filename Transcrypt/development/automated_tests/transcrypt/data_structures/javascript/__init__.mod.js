	__nest__ (
		__all__,
		'data_structures', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var run = function (autoTester) {
						var aList = [1, 2, 3, 'sun', 'moon', 'stars'];
						autoTester.check (aList);
						autoTester.check (aList.__getslice__ (2, 4, 1));
						autoTester.check (aList.slice (0));
						autoTester.check (aList.slice (2));
						autoTester.check (len (aList));
						aList.append ('milkyway');
						autoTester.check (aList);
						aList.extend (['m1', 'm31']);
						autoTester.check (aList);
						var anotherList = list (tuple (['a', 'b', 'c']));
						autoTester.check (anotherList);
						var aDict = {1: 'plant', 'animal': 2};
						autoTester.check (aDict);
						autoTester.check (aDict [1] , aDict ['animal'] );
						var aTuple = tuple ([1, 2, 3, 4, 5]);
						autoTester.check (aTuple);
						autoTester.check (len (aTuple));
						var anotherTuple = tuple ([1]);
						autoTester.check (anotherTuple);
						var aSet = new set ([1, 2, 2, 3]);
						autoTester.check (aSet);
						autoTester.check (len (aSet));
						var anotherSet = set (tuple ([4, 5, 5, 6]));
						autoTester.check (anotherSet);
						var emptySet = set ();
						autoTester.check (emptySet);
						autoTester.check (len (emptySet));
					};
					//<all>
					__all__.run = run;
					//</all>
				}
			}
		}
	);