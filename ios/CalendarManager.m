//
//  CalendarManager.m
//  SingleCodeTest
//
//  Created by Karthik Challa on 28/01/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

NSString * const MYSomethingHappenedNotification = @"MYSomethingHappenedNotification";

NSString * targetName = @"Tank";

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
