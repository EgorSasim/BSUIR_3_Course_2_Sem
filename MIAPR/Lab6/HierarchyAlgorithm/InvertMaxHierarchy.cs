﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace HierarchyAlgorithm
{
    public class MaxHierarchy : Hierarchy
    {
        public MaxHierarchy(int elementsCount, int width, int heght)
            : base(elementsCount, width, heght)
        {
        }

        protected override int MinMaxStartValue
        {
            get { return 0; }
        }

        protected override int GetYStep(List<Line> list)
        {
            return
                (int)
                    ((Height - downSpace)*
                     list.Where(x => Math.Abs(x.From.Y - x.To.Y) < 0.01).Min(x => x.From.Y));
        }

        protected override double GetCurrentY(double distance)
        {
            return Math.Abs(distance) < 0.01 ? 0 : YStep/distance;
        }

        protected override int GetMinMax(int first, int second)
        {
            return first > second ? first : second;
        }

        protected override string GetYString(int distance)
        {
            return  distance.ToString();
        }

        protected override bool CompareMinMax(int first, int second)
        {
            return first > second;
        }
    }
}